const fetch = require('node-fetch')
const tokenGenerators = require('./src/tokenGenerators')

const roomUuidurl = 'https://api.netless.link/v5/rooms'
const taskUuidUrl = 'https://api.netless.link/v5/services/conversion/tasks'
const sdkRegion = 'cn-hz'
const tokenValidTimeInMillisecond = 24 * 60 * 60 * 1000

const generateGetDocTransformationProgressUrl = (taskUuid) => {
    return `https://api.netless.link/v5/services/conversion/tasks/${taskUuid}?type=static`
}

const generateSdkToken = function (AK, SK) {
    return tokenGenerators.sdkToken(
        AK, // 将 Your AK 替换成你从控制台获取的 AK。
        SK, // 将 Your SK 替换成你从控制台获取的 SK。
        tokenValidTimeInMillisecond, // Token 有效时间，单位为毫秒。设为 0 时，表示永不过期。
        {
            role: 0 // Token 的权限，取值包括 0（Admin），1（Writer），2（Reader）。
        }
    )
}

const getUuid = async (AK, SK, sdkToken) => {
    const responseUuid = await fetch(roomUuidurl, {
        method: 'POST',
        headers: {
            'token': sdkToken,
            'Content-Type': 'application/json',
            'region': sdkRegion
        }
    })
    const bodyUuid = await responseUuid.json()
    return bodyUuid.uuid
}

const generateRoomToken = async (AK, SK, uuid) => {
    return tokenGenerators.roomToken(
        AK, // 将 Your AK 替换成你从控制台获取的 AK。
        SK, // 将 Your SK 替换成你从控制台获取的 SK。
        tokenValidTimeInMillisecond, // Token 有效时间，单位为毫秒。设为 0 时，表示永不过期。
        {
            role: 0, // Token 的权限，取值包括 0（Admin），1（Writer），2（Reader）。
            uuid: uuid // 填入你的房间 UUID，可通过调用服务端创建房间 API 或获取房间列表 API 获取。
        }
    )
}

const generateTaskToken = async (AK, SK, taskUuid) => {
    return tokenGenerators.taskToken(
        AK, // 将 Your AK 替换成你从控制台获取的 AK。
        SK, // 将 Your SK 替换成你从控制台获取的 SK。
        tokenValidTimeInMillisecond, // Token 有效时间，单位为毫秒。设为 0 时，表示永不过期。
        {
            role: 0,  // Token 的权限，取值包括 0（Admin），1（Writer），2（Reader）。
            uuid: taskUuid // 填入转换任务的 UUID，可通过调用服务端发起文档转换任务 API 获取。
        }
    )
}

module.exports = {
    generateSdkToken,
    getUuid,
    generateRoomToken,
    generateTaskToken,
    sdkRegion,
    taskUuidUrl,
    generateGetDocTransformationProgressUrl
}
