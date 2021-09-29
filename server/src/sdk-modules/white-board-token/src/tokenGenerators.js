const { createHmac } = require('crypto')
const { v1: uuidv1 } = require('uuid')


// 数字越小，权限越大
const TokenRole = {
    Admin: '0',
    Writer: '1',
    Reader: '2',
}
module.exports.TokenRole = TokenRole

const TokenPrefix = {
    SDK: 'NETLESSSDK_',
    ROOM: 'NETLESSROOM_',
    TASK: 'NETLESSTASK_',
}
module.exports.TokenPrefix = TokenPrefix

/**
 * buffer 转 base64，且格式化字符
 * @param {Buffer} buffer - 要格式化的 buffer 对象
 * @return {string}
 */
const bufferToBase64 = buffer => {
    return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

/**
 * 为对象排序，并把非字符串的 value 转成 string
 * @param {Object} object - 要转换的对象
 * @return {Object}
 */
const formatJSON = object => {
    const keys = Object.keys(object).sort()
    const target = {}

    for (const key of keys) {
        target[key] = String(object[key])
    }
    return target
}

/**
 * 序列化对象
 * 把 undefined 转为空字符串
 * 把 null 转为 "null"
 * 最终通过 & 连接成一个字符串
 * 实现强参考: https://github.com/sindresorhus/query-string/blob/master/index.js#L284
 * @param {Object} object - 将要序列化的对象
 * @return {string}
 */
const stringify = (object) => {
    return Object.keys(object)
        .map(key => {
            const value = object[key]

            if (value === undefined) {
                return ''
            }

            if (value === null) {
                return 'null'
            }

            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        })
        .join('&')
}

/**
 * sdk token 所需额外参数
 * @typedef {Object} SdkToken
 * @property {number} [role] - 权限等级，有 0~2，越小权限越大
 */
/**
 * room token 所需额外参数
 * @typedef {Object} RoomToken
 * @property {number} [role] - 权限等级，有 0~2，越小权限越大
 * @property {string} [uuid] - uuid
 */
/**
 * task token 所需额外参数
 * @typedef {Object} TaskToken
 * @property {number} [role] - 权限等级，有 0~2，越小权限越大
 * @property {string} [uuid] - uuid
 */
/**
 * 根据 prefix 生成相应的 token
 * @param {"NETLESSSDK_" | "NETLESSROOM_" | "NETLESSTASK_"} prefix - 相关 token 的前缀
 * @return {function(string, string, number, SdkToken | RoomToken | TaskToken): string}
 */
const createToken = prefix => {
    return (accessKey, secretAccessKey, lifespan, content) => {
        const object = {
            ...content,
            ak: accessKey,
            nonce: uuidv1(),
        }

        if (lifespan > 0) {
            object.expireAt = `${Date.now() + lifespan}`
        }

        const information = JSON.stringify(formatJSON(object))
        const hmac = createHmac('sha256', secretAccessKey)
        object.sig = hmac.update(information).digest('hex')

        const query = stringify(formatJSON(object))
        const buffer = Buffer.from(query, 'utf8')

        return prefix + bufferToBase64(buffer)
    }
}

// 生成 sdk token
module.exports.sdkToken = createToken(TokenPrefix.SDK)

// 生成 room token
module.exports.roomToken = createToken(TokenPrefix.ROOM)

// 生成 task token
module.exports.taskToken = createToken(TokenPrefix.TASK)
