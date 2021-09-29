const CreateTeamDrawer =require('../component/UserProfile/Team/CreateTeamDrawer')
const submitHandler = require('../component/UserProfile/Team/CreateTeamDrawer')
const selectedUserHandler =require('../component/UserProfile/Team/CreateTeamDrawer')
test('test Creatteamdrawer', () => {
    // await request(submitHandler).post('./users').send({
    //     idOwner: 'Tom',
    //     idMembers: 'Jack',
    //     teamname: 'jsk',
    //     description: '123'
    // }).expection(201)
    expect(selectedUserHandler).not.toBeNull()
})