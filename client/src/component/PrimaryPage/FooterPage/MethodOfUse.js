import React from 'react'
import NavBar from '../NavBar'
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    ChakraProvider
} from '@chakra-ui/react'
import one from "./one.png"
import two from "./two.png"
import three from "./three.png"
import { ChakraFooter } from '../FooterWithTwoColumns/App'

const Testimonial = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};
const TestimonialContent = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Stack
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                p={8}
                rounded={'xl'}
                align={'center'}
                pos={'relative'}
                _after={{
                    content: `""`,
                    w: 0,
                    h: 0,
                    borderLeft: 'solid transparent',
                    borderLeftWidth: 16,
                    borderRight: 'solid transparent',
                    borderRightWidth: 16,
                    borderTop: 'solid',
                    borderTopWidth: 16,
                    borderTopColor: useColorModeValue('white', 'gray.800'),
                    pos: 'absolute',
                    bottom: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                {children}
            </Stack>
        </>
    );
};
const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};
const TestimonialAvatar = ({ src }: { src: string; }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2}/>
        </Flex>
    );
};
export default function MethodOfUse() {
    return (
        <>
            <NavBar/>
            <Box bg={useColorModeValue('gray.100', 'gray.700')}>
                <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                    <Stack spacing={0} align={'center'}>
                        <Heading marginTop="5%">How to use our website</Heading>
                        <Text paddingTop="15px">Please read the brief description below</Text>
                    </Stack>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 10, md: 4, lg: 10 }}
                        paddingBottom="10%">
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Having Account</TestimonialHeading>
                                <TestimonialText>
                                    Simply enter email, username and password to register an account on our website and
                                    log in.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar src={one}/>
                        </Testimonial>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Having Team</TestimonialHeading>
                                <TestimonialText>
                                    The user interface is displayed. Select other users to create a team or accept
                                    invitations from other users to join the team
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar src={two}/>
                        </Testimonial>
                        <Testimonial>
                            <TestimonialContent>
                                <TestimonialHeading>Having Session</TestimonialHeading>
                                <TestimonialText>
                                    On the user interface that is displayed, you can select another user to create a
                                    meeting or accept an invitation from another user.
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar src={three}/>
                        </Testimonial>
                    </Stack>
                </Container>
            </Box>
            <ChakraProvider>
                <ChakraFooter/>
            </ChakraProvider>
        </>
    );
}

