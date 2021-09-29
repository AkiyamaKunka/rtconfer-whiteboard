const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Session = require('../../src/models/session')
const Team = require('../../src/models/team')

const tearDownDatabase = async () => {
    await User.deleteMany()
    await Session.deleteMany()
    await Team.deleteMany()
}

const connectToDatabase = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

const disconnectFromDatabase = () => {
    mongoose.connection.close()
}

const getBearerToken = (user) => {
    return `Bearer ${user.tokens[0].token}`
}

const generateRandomString = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; ++i) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

const generateRandomUser = () => {
    const userId = new mongoose.Types.ObjectId()
    const userName = generateRandomString(6)
    const password = generateRandomString(9)
    const user = {
        _id: userOneId,
        userName,
        email: userName + '@example.com',
        password,
        tokens: [{
            token: jwt.sign({ _id: userId }, process.env.JWT_SECRET)
        }]
    }
    return user
}

const getAddTeamMemberRequestBody = (idTeam, userArray) => {
    const newTeamMembers = userArray.map((user) => {
        return {idUser: user._id}
    })
    return {
        idTeam,
        newTeamMembers
    }
}

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    userName: 'Mike',
    email: 'mike@example.com',
    password: '5612what@',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    userName: 'Jess',
    email: 'jess@example.com',
    password: '5612what#',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const userNew = {
    userName: 'Andrew',
    email: 'andrew@example.com',
    password: 'MyPass513#'
}

const sessionOneId = new mongoose.Types.ObjectId()
const sessionOne = {
    _id: sessionOneId,
    participants: [
        {idUser: userOne._id},
        {idUser: userTwo._id}
    ],
    sessionName: 'Session One',
    description: 'owner: 1, participants: {1, 2}',
    owner: userOne._id,
    sessionUrl: 'localhost:8080/sessionOne'
}

const sessionTwoId = new mongoose.Types.ObjectId()
const sessionTwo = {
    _id: sessionTwoId,
    participants: [
        {idUser: userOne._id},
        {idUser: userTwo._id}
    ],
    sessionName: 'Session Two',
    description: 'owner: 2, participants: {1, 2}',
    owner: userTwo._id,
    sessionUrl: 'localhost:8080/sessionTwo'
}

const teamOneId = new mongoose.Types.ObjectId()
const teamOne = {
    _id: teamOneId,
    members: [
        {idUser: userOne._id},
        {idUser: userTwo._id}
    ],
    teamName: 'Team One',
    description: 'owner: 1, members: {1, 2}',
    owner: userOne._id
}

const teamTwoId = new mongoose.Types.ObjectId()
const teamTwo = {
    _id: teamTwoId,
    members: [
        {idUser: userOne._id},
        {idUser: userTwo._id}
    ],
    teamName: 'Team Two',
    description: 'owner: 2, members: {1, 2}',
    owner: userTwo._id
}


const setupDatabase = async () => {
    await tearDownDatabase()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Session(sessionOne).save()
    await new Session(sessionTwo).save()
    await new Team(teamOne).save()
    await new Team(teamTwo).save()
}

module.exports = {
    connectToDatabase,
    setupDatabase,
    tearDownDatabase,
    disconnectFromDatabase,
    getBearerToken,
    userOne,
    userTwo,
    userNew,
    generateRandomUser,
    getAddTeamMemberRequestBody,
    sessionOne,
    sessionTwo,
    teamOne,
    teamTwo
}
