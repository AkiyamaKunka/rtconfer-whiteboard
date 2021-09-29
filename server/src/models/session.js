const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
    sessionName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    owner: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    ownerName: {
        type: String
    },
    description: {
        type: String,
        trim: true,
        maxLength: 100
    },
    participants: [{
        idUser: {
            type: ObjectId,
            required: true,
            ref: 'User'
        }
    }],
    sessionUrl: {
        type: String
    },
    uuid: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

sessionSchema.methods.toJSON = function () {
    const session = this
    const sessionObject = session.toObject()
    sessionObject.idSession = sessionObject._id
    delete sessionObject._id
    return sessionObject
}

const Session = mongoose.model('Session', sessionSchema)

module.exports = Session
