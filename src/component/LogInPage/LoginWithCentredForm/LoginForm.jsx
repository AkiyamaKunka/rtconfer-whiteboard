import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'
import React, { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../store/auth-context/auth-context'
import API_URL from '../../../assets/config-api/api-url'


export const LoginForm = (props) => {

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const authCtx = useContext(AuthContext)
    const currentUrl = useHistory()
    const submitHandler = (event) => {
        event.preventDefault()
        const emailInput = emailInputRef.current.value
        const passwordInput = passwordInputRef.current.value
        authCtx.login(emailInput, passwordInput, currentUrl)
        console.log("authCtx.email is " + authCtx.email)
    }

    return (
        <form onSubmit={submitHandler}>
            <Stack spacing="6">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input ref={emailInputRef} name="email" type="email" autoComplete="email" required/>
                </FormControl>
                <PasswordField passwordRef={passwordInputRef}/>
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                    Login
                </Button>
            </Stack>
        </form>
    )
}
