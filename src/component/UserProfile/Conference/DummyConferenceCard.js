import {
    Heading,
    Box,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue,
    CloseButton,Skeleton, SkeletonCircle, SkeletonText,
} from '@chakra-ui/react'
import React from 'react'



function DummyConferenceCard (props) {

    return (
        <Box py={6} style={{display: 'inline-block', margin: '10px'}}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Box padding="6" boxShadow="lg" bg="white" w={'270px'} h={'411px'}>
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={6} spacing="7" />
                </Box>

            </Box>
        </Box>
    )
}

export default DummyConferenceCard
