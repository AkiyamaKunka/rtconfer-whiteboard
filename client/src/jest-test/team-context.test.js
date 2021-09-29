const TeamContext = require('../store/team-context/team-context')
const TeamContextProvider = require('../store/team-context/team-context')

describe('test team-context', () => {
    test('TeamContext 不为空', () => {
        expect(TeamContext).not.toBeNull()
    });
    test('TeamContextProvider 不为空', () => {
        expect(TeamContextProvider).not.toBeNull()
    });
})