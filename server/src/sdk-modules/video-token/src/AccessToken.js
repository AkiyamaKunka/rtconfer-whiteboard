const crypto = require('crypto')
const crc32 = require('crc-32')
const UINT32 = require('cuint').UINT32
const version = '006'
const randomInt = Math.floor(Math.random() * 0xFFFFFFFF)
const VERSION_LENGTH = 3
const APP_ID_LENGTH = 32

const AccessToken = function (appID, appCertificate, channelName, uid) {
    let token = this
    this.appID = appID
    this.appCertificate = appCertificate
    this.channelName = channelName
    this.messages = {}
    this.salt = randomInt
    this.ts = Math.floor(new Date() / 1000) + (24 * 3600)
    if (uid === 0) {
        this.uid = ''
    } else {
        this.uid = `${uid}`
    }

    this.build = function () {
        const m = Message({
            salt: token.salt
            , ts: token.ts
            , messages: token.messages
        }).pack()

        const toSign = Buffer.concat(
            [Buffer.from(token.appID, 'utf8'), 
                Buffer.from(token.channelName, 'utf8'), 
                Buffer.from(token.uid, 'utf8'), 
                m])

        const signature = encodeHMac(token.appCertificate, toSign)
        const crc_channel = UINT32(crc32.str(token.channelName)).and(UINT32(0xffffffff)).toNumber()
        const crc_uid = UINT32(crc32.str(token.uid)).and(UINT32(0xffffffff)).toNumber()
        const content = AccessTokenContent({
            signature: signature,
            crc_channel: crc_channel,
            crc_uid: crc_uid,
            m: m
        }).pack()
        return (version + token.appID + content.toString('base64'))
    }

    this.addPriviledge = function (priviledge, expireTimestamp) {
        token.messages[priviledge] = expireTimestamp
    }

    this.fromString = function (originToken) {
        try {
            const originVersion = originToken.substr(0, VERSION_LENGTH)
            if(originVersion != version) {
                return false
            }
            // const originAppID = originToken.substr(VERSION_LENGTH, (VERSION_LENGTH + APP_ID_LENGTH))
            const originContent = originToken.substr((VERSION_LENGTH + APP_ID_LENGTH))
            const originContentDecodedBuf = Buffer.from(originContent, 'base64')

            const content = unPackContent(originContentDecodedBuf)
            this.signature = content.signature
            this.crc_channel_name = content.crc_channel_name
            this.crc_uid = content.crc_uid
            this.m = content.m

            const msgs = unPackMessages(this.m)
            this.salt = msgs.salt
            this.ts = msgs.ts
            this.messages = msgs.messages
            
        } catch (err) {
            console.log(err)
            return false
        }
        
        return true
    }
}

module.exports.version = version
module.exports.AccessToken = AccessToken
module.exports.priviledges = {
    kJoinChannel: 1,
    kPublishAudioStream: 2,
    kPublishVideoStream: 3,
    kPublishDataStream: 4,
    kRtmLogin: 1000
}

const encodeHMac = function (key, message) {
    return crypto.createHmac('sha256', key).update(message).digest()
}

const ByteBuf = function () {
    const that = {
        buffer: Buffer.alloc(1024)
        , position: 0
    }

    that.buffer.fill(0)

    that.pack = function () {
        const out = Buffer.alloc(that.position)
        that.buffer.copy(out, 0, 0, out.length)
        return out
    }

    that.putUint16 = function (v) {
        that.buffer.writeUInt16LE(v, that.position)
        that.position += 2
        return that
    }

    that.putUint32 = function (v) {
        that.buffer.writeUInt32LE(v, that.position)
        that.position += 4
        return that
    }

    that.putBytes = function (bytes) {
        that.putUint16(bytes.length)
        bytes.copy(that.buffer, that.position)
        that.position += bytes.length
        return that
    }

    that.putString = function (str) {
        return that.putBytes(Buffer.from(str))
    }

    that.putTreeMap = function (map) {
        if (!map) {
            that.putUint16(0)
            return that
        }

        that.putUint16(Object.keys(map).length)
        for (const key in map) {
            that.putUint16(key)
            that.putString(map[key])
        }

        return that
    }

    that.putTreeMapUInt32 = function (map) {
        if (!map) {
            that.putUint16(0)
            return that
        }

        that.putUint16(Object.keys(map).length)
        for (const key in map) {
            that.putUint16(key)
            that.putUint32(map[key])
        }

        return that
    }
    
    return that
}


const ReadByteBuf = function(bytes) {
    const that = {
        buffer: bytes
        , position: 0
    }

    that.getUint16 = function () {
        const ret = that.buffer.readUInt16LE(that.position)
        that.position += 2
        return ret
    }

    that.getUint32 = function () {
        const ret = that.buffer.readUInt32LE(that.position)
        that.position += 4
        return ret
    }

    that.getString = function () {
        const len = that.getUint16()

        const out = Buffer.alloc(len)
        that.buffer.copy(out, 0, that.position, (that.position + len))
        that.position += len
        return out
    }

    that.getTreeMapUInt32 = function () {
        const map = {}
        const len = that.getUint16()
        for( let i = 0; i < len; i++) {
            const key = that.getUint16()
            const value = that.getUint32()
            map[key] = value
        }
        return map
    }

    return that
}
const AccessTokenContent = function (options) {
    options.pack = function () {
        const out = new ByteBuf()
        return out.putString(options.signature)
            .putUint32(options.crc_channel)
            .putUint32(options.crc_uid)
            .putString(options.m).pack()
    }

    return options
}

const Message = function (options) {
    options.pack = function () {
        const out = new ByteBuf()
        return out
            .putUint32(options.salt)
            .putUint32(options.ts)
            .putTreeMapUInt32(options.messages).pack()
    }

    return options
}

const unPackContent = function(bytes) {
    const readbuf = new ReadByteBuf(bytes)
    return AccessTokenContent({
        signature: readbuf.getString(),
        crc_channel_name: readbuf.getUint32(),
        crc_uid: readbuf.getUint32(),
        m: readbuf.getString()
    })
}

const unPackMessages = function(bytes) {
    const readbuf = new ReadByteBuf(bytes)
    return Message({
        salt: readbuf.getUint32(),
        ts: readbuf.getUint32(),
        messages: readbuf.getTreeMapUInt32()
    })
}
