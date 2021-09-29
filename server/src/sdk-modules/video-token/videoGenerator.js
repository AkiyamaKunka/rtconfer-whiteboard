const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('./src/tokenModules')

const generateRtcToken = (appID, appCertificate, channelName, account) => {
    const role = RtcRole.PUBLISHER

    const expirationTimeInSeconds = 3600

    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

    // Build token with uid
    return RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, account, role, privilegeExpiredTs)

    // Build token with user account
    // const tokenWithAccount = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs)
    // return tokenWithAccount
}


const generateRtmToken = (appID, appCertificate, account) => {
    const expirationTimeInSeconds = 7200
    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    return RtmTokenBuilder.buildToken(appID, appCertificate, account, RtmRole, privilegeExpiredTs)
}

module.exports = {
    generateRtcTokenWithAccount: generateRtcToken,
    generateRtmToken
}
