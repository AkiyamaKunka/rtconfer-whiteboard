const { useState } = require('react')
const AuthContext = require('../store/auth-context/auth-context')
const AuthContextValue = require('../store/auth-context/auth-context')

test('test auth-context', () => {
    // const enteredEmail = '1@2.com',
    // const enteredPassword = '123456',
    // const enteredUsername = 'Tom',
    expect(AuthContext).not.toBeNull()
    expect(AuthContextValue).not.toBeNull()
    // const token = null
    // expect(useState).toBe(false)
})