import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react'
export default function ConferenceCard() {
    return (
        <Box py={6} style={{ display: 'inline-block', margin: '10px' }}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                />
                {/*<Flex justify={'center'} mt={-12}>*/}
                {/*    <Avatar*/}
                {/*        size={'xl'}*/}
                {/*        // src={*/}
                {/*        //      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'*/}
                {/*        // }*/}
                {/*        alt={'Author'}*/}
                {/*        css={{*/}
                {/*            border: '2px solid white',*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Flex>*/}

                <Box p={5}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Meeting
                        </Heading>
                        <Text color={'gray.500'}>Kunka. Inc</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>July 4th</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                End Time
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>13</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Participants
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        variant="outline"
                        colorScheme="gray.900"
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('white', 'gray.900')}
                        color={'gray.900'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                            color: 'white',
                            bg: 'blue.400',
                        }}>
                        Recover
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}