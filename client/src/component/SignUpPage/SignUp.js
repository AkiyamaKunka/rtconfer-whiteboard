import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image
} from '@chakra-ui/react'
import React, { useRef, useContext } from 'react'
import { AuthContext } from '../../store/auth-context/auth-context'
import { useHistory } from 'react-router-dom'

export default function SignUp() {
    const currentUrl = useHistory()
    const authCtx = useContext(AuthContext)
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const usernameInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        const enteredUsername = usernameInputRef.current.value
        authCtx.signIn(enteredEmail, enteredPassword, enteredUsername, currentUrl)
    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Create Your Account Now!</Heading>
                    <form onSubmit={submitHandler}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" ref={emailInputRef}/>
                        </FormControl>
                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <Input type="text" ref={usernameInputRef}/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" ref={passwordInputRef}/>
                        </FormControl>
                        <Stack spacing={4}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>I confirm that I have entered more than seven digits.</Checkbox>
                                {/*<Link color={'blue.500'}>Forgot password?</Link>*/}
                            </Stack>
                            <Button colorScheme={'blue'} variant={'solid'} type="submit">
                                Sign up
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
}
