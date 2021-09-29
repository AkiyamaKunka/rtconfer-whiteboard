const express = require('express')
const User = require('../models/user')
const Session = require('../models/session')
const Team = require('../models/team')
const { userAuthentication } = require('../middleware/authentication')
const router = new express.Router()

router.post('/user/sign-up', async (request, response) => {
    const user = new User(request.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        response.status(201).send({user, token})
    } catch(error) {
        response.status(400).send(error)
    }
})

router.post('/user/login', async (request, response) => {
    try {
        const user = await User.findByCredentials(request.body.email, request.body.password)
        const token = await user.generateAuthToken()
        response.send({ user, token })
    } catch (error) {
        response.status(400).send()
    }
})

router.post('/user/logout', userAuthentication, async (request, response) => {
    try {
        request.user.tokens = request.user.tokens.filter((token) => {
            return token.token !== request.token
        })
        await request.user.save()
        response.send()
    } catch (error) {
        response.status(500).send()
    }
})

router.post('/user/logout-all', userAuthentication, async (request, response) => {
    try {
        request.user.tokens = []
        await request.user.save()
        response.send()
    } catch (error) {
        response.status(500).send()
    }
})

router.get('/user/me', userAuthentication, async (request, response) => {
    try {
        response.send(request.user)
    } catch(error) {
        response.status(500).send()
    }
})

// get id and name of all users
router.get('/user/get-all-users', userAuthentication, async (request, response) => {
    try {
        const users = await User.find({}, {userName: 1})
        response.send(users)
    } catch(error) {
        response.status(500).send()
    }
})

router.get('/user/get-all-session', userAuthentication, async (request, response) => {
    const user = request.user
    try {
        const sessions = await Session.find({participants: { $elemMatch: {idUser: user._id}}}, {sessionName: 1, owner: 1, ownerName: 1, createdAt: 1, sessionUrl: 1})
        const sessionsInformation = sessions.map(session => {
            const renamedSession = {
                ...session._doc,
                idSession: session._id,
            }
            delete renamedSession._id
            return renamedSession
        })
        response.send(sessionsInformation)
    } catch (error) {
        response.status(500).send(error)
    }
})

router.get('/user/get-all-teams', userAuthentication, async (request, response) => {
    const user = request.user
    try {
        const teams = await Team.find({members: { $elemMatch: {idUser: user._id}}}, {teamName: 1})
        await user.populate({
            path: 'ownedTeams'
        }).execPopulate()
        const userInTeams = teams.map(team => {
            return {idTeam: team._id, teamName: team.teamName}
        })
        const userOwnTeams = user.ownedTeams.map(team => {
            return {idTeam: team._id, teamName: team.teamName}
        })
        const briefAllTeams = {userInTeams, userOwnTeams}
        response.send(briefAllTeams)
    } catch (error) {
        response.status(500).send(error)
    }
})

router.delete('/user/me', userAuthentication, async (request, response) => {
    try {
        await request.user.remove()
        response.send(request.user)
    } catch(error) {
        response.status(500).send()
    }
})

module.exports = router
