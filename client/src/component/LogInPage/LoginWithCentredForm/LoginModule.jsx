import {
    Box, ChakraProvider,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './Card'
import { DividerWithText } from './DividerWithText'
import { Link } from './Link'
import { LoginForm } from './LoginForm'
import { Logo } from './Logo'
import { Link as ReactLink } from 'react-router-dom'
import NavBar from '../../PrimaryPage/NavBar'
import { ChakraFooter } from '../../PrimaryPage/FooterWithTwoColumns/App'

export const LoginModule = () => {
    return (
        <>
            <NavBar/>
            <Box
                bg={useColorModeValue('gray.50', 'inherit')}
                minH="100vh"
                py="12"
                px={{
                    base: '4',
                    lg: '8'
                }}
            >
                <Box maxW="md" mx="auto">
                    <Logo
                        mx="auto"
                        h="8"
                        mb={{
                            base: '10',
                            md: '20'
                        }}
                    />
                    <Heading textAlign="center" size="xl" fontWeight="extrabold">
                        Login to your account
                    </Heading>
                    <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                        <Text as="span">Don&apos;t have an account?</Text>
                        <Link as={ReactLink} to={'./sign-up'}>Start free trial</Link>
                    </Text>
                    <Card>
                        <LoginForm/>
                        <DividerWithText mt="6">More ways for login coming soon...</DividerWithText>
                    </Card>
                </Box>
            </Box>
            <ChakraProvider>
                <ChakraFooter/>
            </ChakraProvider>
        </>
    )
}
export default LoginModule
