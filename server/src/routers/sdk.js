const express = require('express')
const fetch = require('node-fetch')
const { userAuthentication } = require('../middleware/authentication')
const Session = require('../models/session')
const { generateRtcTokenWithAccount } = require('../sdk-modules/video-token/videoGenerator')
const {
    generateSdkToken,
    generateRoomToken,
    generateTaskToken,
    sdkRegion,
    taskUuidUrl,
    generateGetDocTransformationProgressUrl
} = require('../sdk-modules/white-board-token/whiteGenerator')
const { AK, SK } = process.env

const router = new express.Router()

router.post('/video/apply-for-token', userAuthentication, async (request, response) => {
    try {
        const token = generateRtcTokenWithAccount(request.body.appId, request.body.appCertificate, request.body.channelName, request.user._id.toString())
        response.send({tokenVideo: token})
    } catch (error) {
        response.status(500).send()
    }
})

router.post('/white-board/apply-for-token', userAuthentication, async (request, response) => {
    try {
        const idSession = request.body.idSession
        const session = await Session.findById(idSession, {uuid: 1})
        if (!session) {
            return response.status(404).send()
        }
        const uuid = session.uuid
        const roomToken = await generateRoomToken(AK, SK, uuid)
        response.send({ uuid, roomToken })
    } catch (error) {
        response.status(500).send()
    }
})

const getTaskUuid = async (sdkToken, resourseUrl) => {
    const body = {
        resource: resourseUrl,
        type: 'static',
        preview: true,
        scale: 1,
        outputFormat: 'png'
    }
    const options = {
        method: 'POST',
        headers: {
            'token': sdkToken,
            'Content-Type': 'application/json',
            'region': sdkRegion
        },
        body: JSON.stringify(body)
    }
    const response = await fetch(taskUuidUrl, options)
    const data = await response.json()
    return data.uuid
}

router.post('/white-board/get-image-url', userAuthentication, async (request, response) => { // need auth
    try {
        const docUrl = request.body.docUrl
        if (!docUrl) {
            return response.status(400).send()
        }
        const sdkToken = generateSdkToken(AK, SK)
        const taskUuid = await getTaskUuid(sdkToken, docUrl)
        const taskToken = await generateTaskToken(AK, SK, taskUuid)
        const options = {
            method: 'GET',
            headers: {
                'token': taskToken,
                'region': sdkRegion
            }
        }
        let accumulatedTime = 0
        const requestInterval = 200
        const maxWaitingTime = 1000 * 20
        const askStatus = setTimeout(async function sendRequest () {
            const statusResponse = await fetch(generateGetDocTransformationProgressUrl(taskUuid), options)
            const data = await statusResponse.json()
            accumulatedTime += requestInterval
            if (data.status === 'Finished') {
                clearTimeout(askStatus)
                response.send(data.progress.convertedFileList)
            } else if (accumulatedTime < maxWaitingTime) {
                setTimeout(sendRequest, requestInterval)
            } else {
                clearTimeout(askStatus)
                response.status(500).send()
            }
        }, requestInterval)
    } catch (error) {
        response.status(500).send()
    }
})

module.exports = router
