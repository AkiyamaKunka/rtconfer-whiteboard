const request = require('supertest')
const app = require('../src/app')
const Team = require('../src/models/team')
const {
    connectToDatabase,
    setupDatabase,
    disconnectFromDatabase,
    getBearerToken,
    generateRandomUser,
    getAddTeamMemberRequestBody,
    userOne,
    userTwo,
    teamOne,
    teamTwo
} = require('./fixtures/db')

beforeAll(async () => {
    connectToDatabase()
    await setupDatabase()
})

afterAll(disconnectFromDatabase)

const teamNew = {
    members: [
        {idUser: userOne._id}
    ],
    teamName: 'Team New',
    description: 'owner: 1, participants: {1}',
    owner: userOne._id
}

test('Should create a new team for user', async () => {
    const response = await request(app)
        .post('/team/create-team')
        .set('Authorization', getBearerToken(userOne))
        .send(teamNew)
        .expect(201)
    const team = await Team.findById(response.body.idTeam)
    expect(team).not.toBeNull()
})

test('Should not create a new team for unauthenticated user', async () => {
    await request(app).post('/team/create-team').send(teamNew).expect(401)
})

test('Should get all teams for user', async () => {
    const response = await request(app)
        .post('/team/get-team-members')
        .set('Authorization', getBearerToken(userOne))
        .send({idTeam: teamOne._id})
        .expect(200)
    expect(response.userOwnTeams).not.toBeNull()
    expect(response.userInTeams).not.toBeNull()    
})

test('Should not get teams for unautheticated user', async () => {
    await request(app).post('/team/get-team-members').send({idTeam: teamOne._id}).expect(401)
})

test('Should add team members for owner', async () => {
    const newUserOne = generateRandomUser()
    const newUserTwo = generateRandomUser()
    const body = getAddTeamMemberRequestBody(teamOne._id, [newUserOne, newUserTwo])
    await request(app)
        .post('/team/add-team-members')
        .set('Authorization', getBearerToken(userOne))
        .send(body)
        .expect(200)
    const team = await Team.findById(teamOne._id)
    const members = team.members.map((member) => {
        return member.idUser
    })
    expect(members).toContainEqual(newUserOne._id)
    expect(members).toContainEqual(newUserTwo._id)
})

test('Should not add team members for unautheticated user', async () => {
    const newUserOne = generateRandomUser()
    const newUserTwo = generateRandomUser()
    const body = getAddTeamMemberRequestBody(teamOne._id, [newUserOne, newUserTwo])
    await request(app).post('/team/add-team-members').send(body).expect(401)
    // user not owner
    await request(app)
        .post('/team/add-team-members')
        .set('Authorization', getBearerToken(userTwo))
        .send(body)
        .expect(401)
})

test('Should delete team members for user', async () => {
    const body = {
        idTeam: teamOne._id,
        membersToDelete: [
            {idUser: userTwo._id}
        ]
    }
    await request(app)
        .delete('/team/delete-team-members')
        .set('Authorization', getBearerToken(userOne))
        .send(body)
        .expect(200)
    const team = await Team.findById(teamOne._id)
    const members = team.members.map((member) => {
        return member.idUser
    })
    expect(members).not.toContainEqual(userTwo._id)
})

test('Should not delete team members for unautheticated user', async () => {
    const body = {
        idTeam: teamTwo._id,
        membersToDelete: [
            {idUser: userOne._id}
        ]
    }
    await request(app).delete('/team/delete-team-members').send(body).expect(401)
    await request(app).delete('/team/delete-team-members')
        .set('Authorization', getBearerToken(userOne))
        .send(body)
        .expect(401)
})
