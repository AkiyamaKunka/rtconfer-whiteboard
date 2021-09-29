const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamName: {
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
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    members: [{
        idUser: {
            type: ObjectId,
            required: true,
            ref: 'User'
        }
    }]
}, {
    timestamps: true
})

teamSchema.methods.toJSON = function () {
    const team = this
    const teamObject = team.toObject()
    teamObject.idTeam = teamObject._id
    delete teamObject._id
    return teamObject
}

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
