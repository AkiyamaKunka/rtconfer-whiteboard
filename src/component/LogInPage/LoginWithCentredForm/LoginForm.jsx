import {Button, chakra, FormControl, FormLabel, Input, Stack} from '@chakra-ui/react'
import * as React from 'react'
import {PasswordField} from './PasswordField'
import {useRef, useContext} from "react"
import {useHistory} from 'react-router-dom'
import {AuthContext} from "../../../store/auth-context/auth-context";

export const LoginForm = (props) => {
    const loginULR = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    const webAPIKey = "AIzaSyD-zXnqnfkOQnxCELv2BZ4T8zY91X7IBWI"
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const currentUrl = useHistory();
    const submitHandler = (event) => {
        event.preventDefault()
        const emailInput = emailInputRef.current.value
        const passwordInput = passwordInputRef.current.value
        fetch((loginULR + webAPIKey),
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: emailInput,
                        password: passwordInput,
                        returnSecureToken: true
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json.then((data) => {
                    const errorMessage = "Login Failed!"
                    throw new Error(errorMessage)
                })
            }
        }).then((data) => {
            authCtx.login(data.idToken, emailInput)
            currentUrl.push('/welcome') // don't know if this will work
        }).catch((error) => {
            alert(error.errorMessage + " password is " + passwordInput + " and email is " + emailInput)
        })
    }

    return (
        <chakra.form
            onSubmit={submitHandler}
            {...props}
        >
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
        </chakra.form>
    )
}
