import {
    Heading,
    Box,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
export default function ConferenceCard (props) {
    const currentUrl = useHistory()
    const recoverSessionHandler = () => {
        currentUrl.push(props.session.sessionUrl)
    }
    return (
        <Box py={6} style={{display: 'inline-block', margin: '10px'}}>
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

                <Box p={5} w={'270px'} h={'290px'}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                            {props.session.sessionName}
                        </Heading>
                        <Text color={'gray.500'}>Session Subject</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{props.session.ownerName}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Owner
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{props.session.createDate}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Date
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        onClick={recoverSessionHandler}
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
                            bg: 'blue.400'
                        }}>
                        Recover
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
