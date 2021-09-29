const jwt = require('jsonwebtoken')
const isEqual = require('lodash.isequal')
const User = require('../models/user')
const Team = require('../models/team')
const Session = require('../models/session')

const userAuthentication = async (request, response, next) => {
    try {
        const token = request.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token})
        if (!user) {
            throw new Error()
        }
        request.token = token
        request.user = user
        next()
    } catch (error) {
        response.status(401).send({error: 'Unauthenticated source'})
    }
}

const sessionOwnerAuthentication = async (request, response, next) => {
    try {
        if (response.statusCode === 401) {
            throw new Error()
        }
        const session = await Session.findById(request.body.idSession)
        if (!session || !isEqual(request.user._id, session.owner)) {
            throw new Error()
        }
        request.session = session
        next()
    } catch (error) {
        response.status(401).send()
    }
}

const teamOwnerAuthentication = async (request, response, next) => {
    try {
        if (response.statusCode === 401) {
            throw new Error()
        }
        const team = await Team.findById(request.body.idTeam)
        if (!team || !isEqual(request.user._id, team.owner)) {
            throw new Error()
        }
        request.team = team
        next()
    } catch (error) {
        response.status(401).send()
    }
}

module.exports = {
    userAuthentication,
    teamOwnerAuthentication,
    sessionOwnerAuthentication
}
