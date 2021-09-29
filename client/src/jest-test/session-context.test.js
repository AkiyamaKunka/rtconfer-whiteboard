const getAllSessionsHandler = require('../store/session-context/session-context')
const SessionContextValue = require('../store/session-context/session-context')
const { default: SessionContextProvider } = require('../store/session-context/session-context')

test('test session-context', () => {
    // const idMembers = 'Tom',
    // const sessionName = '123',
    // const description = '123',
    // const sessionUrl = '123.com'
    expect(SessionContextValue).not.toBeNull()
    expect(SessionContextProvider).not.toBeNull()
    expect(getAllSessionsHandler).not.toBeNull()
}) 