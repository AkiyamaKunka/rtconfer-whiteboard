const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {
    connectToDatabase,
    setupDatabase,
    disconnectFromDatabase,
    getBearerToken,
    userOne,
    userTwo,
    userNew,
} = require('./fixtures/db')

beforeAll(async () => {
    connectToDatabase()
    await setupDatabase()
})

afterAll(disconnectFromDatabase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/user/sign-up').send(userNew).expect(201)
    
    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user.idUser)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            userName: userNew.userName,
            email: userNew.email
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe(userNew.password)
})

test('Should login existing user', async () => {
    const response = await request(app)
        .post('/user/login').send({
            email: userOne.email,
            password: userOne.password
        })
        .expect(200)
    const user = await User.findById(userOne._id)
    expect(response.body.token).toBe(user.tokens[0].token)
    userOne.tokens[0].token = response.body.token // update token of local userOne
})

test('Should not login user with unmatched email and password', async () => {
    await request(app)
        .post('/user/login')
        .send({
            email: userOne.email,
            password: userTwo.password
        })
        .expect(400)
})

test('Should get profile for user', async () => {
    await request(app).get('/user/me')
        .set('Authorization', getBearerToken(userOne))
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app).get('/user/me').send().expect(401)
})

test('Should get all users for user', async () => {
    await request(app).get('/user/get-all-users')
        .set('Authorization', getBearerToken(userOne))
        .send()
        .expect(200)
})

test('Should not get users for unauthenticated user', async () => {
    await request(app).get('/user/get-all-users').send().expect(401)
})

test('Should get sessions for user', async () => {
    const response = await request(app).get('/user/get-all-session')
        .set('Authorization', getBearerToken(userOne))
        .send()
        .expect(200)
    expect(response.body.length).toBeGreaterThan(0)
})

test('Should not get sessions for unauthenticated user', async () => {
    await request(app).get('/user/get-all-session').send().expect(401)
})

test('Should get teams for user', async () => {
    const response = await request(app).get('/user/get-all-teams')
        .set('Authorization', getBearerToken(userOne))
        .send()
        .expect(200)
    expect(response.userInTeams).not.toBeNull()
    expect(response.userOwnTeams).not.toBeNull()
})

test('Should not get teams for unauthenticated user', async () => {
    await request(app).get('/user/get-all-teams').send().expect(401)
})

test('Should delete account for user', async () => {
    await request(app).delete('/user/me').set('Authorization', getBearerToken(userOne)).send().expect(200)
    const user = await User.findById(userOne._id)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user', async () => {
    await request(app).delete('/user/me').send().expect(401)
})
