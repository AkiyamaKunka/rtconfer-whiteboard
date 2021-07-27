import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa'
import {Card} from './Card'
import {DividerWithText} from './DividerWithText'
import {Link} from './Link'
import {LoginForm} from './LoginForm'
import {Logo} from './Logo'
import WithSubnavigation from "./NavigationBar";
import {Link as ReactLink} from 'react-router-dom'

export const LoginModule = () => (
    <>
      <WithSubnavigation/>
        <Box
            bg={useColorModeValue('gray.50', 'inherit')}
            minH="100vh"
            py="12"
            px={{
                base: '4',
                lg: '8',
            }}
        >
            <Box maxW="md" mx="auto">
                <Logo
                    mx="auto"
                    h="8"
                    mb={{
                        base: '10',
                        md: '20',
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
                    {/*<SimpleGrid mt="6" columns={3} spacing="3">*/}
                    {/*  <Button color="currentColor" variant="outline">*/}
                    {/*    <VisuallyHidden>Login with Facebook</VisuallyHidden>*/}
                    {/*    <FaFacebook />*/}
                    {/*  </Button>*/}
                    {/*  <Button color="currentColor" variant="outline">*/}
                    {/*    <VisuallyHidden>Login with Google</VisuallyHidden>*/}
                    {/*    <FaGoogle />*/}
                    {/*  </Button>*/}
                    {/*  <Button color="currentColor" variant="outline">*/}
                    {/*    <VisuallyHidden>Login with Github</VisuallyHidden>*/}
                    {/*    <FaGithub />*/}
                    {/*  </Button>*/}
                    {/*</SimpleGrid>*/}
                </Card>
            </Box>
        </Box>
    </>
)

export default LoginModule
