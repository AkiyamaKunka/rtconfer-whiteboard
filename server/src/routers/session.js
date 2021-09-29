const express = require('express')
const User = require('../models/user')
const Session = require('../models/session')
const { userAuthentication, sessionOwnerAuthentication } = require('../middleware/authentication')
const { generateSdkToken, getUuid } = require('../sdk-modules/white-board-token/whiteGenerator')
const { AK, SK } = process.env

const router = new express.Router()

router.post('/session/create-session', userAuthentication, async (request, response) => {
    request.body.owner = request.user._id
    const session = new Session(request.body)
    try {
        if (!session) {
            response.status(400).send()
        }
        const ownerName = await User.findById(session.owner, {userName: 1})
        session.ownerName = ownerName.userName
        const sdkToken = generateSdkToken(AK, SK)
        session.uuid = await getUuid(AK, SK, sdkToken)
        await session.save()
        response.status(201).send({idSession: session._id})
    } catch(error) {
        response.status(400).send(error)
    }
})

router.delete('/session/delete-session', userAuthentication, sessionOwnerAuthentication, async (request, response) => { // need auth
    try {
        const session = request.session
        await session.remove()
        response.send(session)
    } catch(error) {
        console.log(error)
        response.status(500).send()
    }
})

module.exports = router
