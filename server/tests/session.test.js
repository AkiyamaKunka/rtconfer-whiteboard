const request = require('supertest')
const app = require('../src/app')
const Session = require('../src/models/session')
const {
    connectToDatabase,
    setupDatabase,
    disconnectFromDatabase,
    getBearerToken,
    userOne,
    sessionOne,
    sessionTwo,
} = require('./fixtures/db')

beforeAll(async () => {
    connectToDatabase()
    await setupDatabase()
})

afterAll(disconnectFromDatabase)

const sessionNew = {
    participants: [
        {idUser: userOne._id}
    ],
    sessionName: 'Session New',
    description: 'owner: 1, participants: {1}',
    owner: userOne._id,
    sessionUrl: 'localhost:8080/sessionNew'
}

test('Should create a new session for user', async () => {
    const response = await request(app)
        .post('/session/create-session')
        .set('Authorization', getBearerToken(userOne))
        .send(sessionNew)
        .expect(201)
    const session = await Session.findById(response.body.idSession)
    expect(session).not.toBeNull()
})

test('Should not create a new session for unauthenticated user', async () => {
    await request(app)
        .post('/session/create-session')
        .send(sessionNew)
        .expect(401)
})

test('Should get uuid and room token for user', async () => {
    const response = await request(app)
        .post('/white-board/apply-for-token')
        .set('Authorization', getBearerToken(userOne))
        .send({ idSession: sessionOne._id })
        .expect(200)
    expect(response.body.uuid).not.toBeNull()
    expect(response.body.roomToken).not.toBeNull()
})

test('Should not get uuid and room token for unauthenticated user', async () => {
    const response = await request(app)
        .post('/white-board/apply-for-token')
        .send({ idSession: sessionOne._id })
        .expect(401)
    expect(response.body.uuid).not.toEqual(expect.anything())
    expect(response.body.roomToken).not.toEqual(expect.anything())
})

test('Should get sessions for user', async () => {
    const response = await request(app)
        .get('/user/get-all-session')
        .set('Authorization', getBearerToken(userOne)) 
        .send()
        .expect(200)
    expect(response.body.length).toBeGreaterThan(0) // user one has 2 sessions
})

test('Should delete the session for owner', async () => {
    await request(app)
        .delete('/session/delete-session')
        .set('Authorization', getBearerToken(userOne))
        .send({ idSession: sessionOne._id })
        .expect(200)
    const session = await Session.findById(sessionOne._id)
    expect(session).toBeNull()
})

test('Should not delete the session for unauthenticated user', async () => {
    await request(app)
        .delete('/session/delete-session')
        .send({ idSession: sessionTwo._id })
        .expect(401)
    const session = await Session.findById(sessionTwo._id)
    expect(session).not.toBeNull()
})
