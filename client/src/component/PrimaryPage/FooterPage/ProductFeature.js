import React from 'react'
import NavBar from '../NavBar'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack, ChakraProvider
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons';
import { ChakraFooter } from '../FooterWithTwoColumns/App'

const features_1 = Array.apply(null, Array(1)).map(function () {
    return {
        id: 0,
        title: 'REAL-TIME COLLABORATION',
        text: 'we provides an engaging, intuitive, in-person collaboration experience with multiple options for real-time or asynchronous teamwork on an online whiteboard.'
    };
});
const features_2 = Array.apply(null, Array(1)).map(function () {
    return {
        id: 1,
        title: 'MEETINGS + WORKSHOPS',
        text: ' Whether your teams are colocated, distributed, or fully remote, Run productive, engaging online remote meetings and workshops with your team.'
    };
});
const features_3 = Array.apply(null, Array(1)).map(function () {
    return {
        id: 2,
        title: 'RICH-MEDIA CANVAS',
        text: 'Our Rich-Media web canvas enables you to work the way you want to. Unleash your creativity, plan projects from all angles, and create centralized hubs of information to keep everyone in the loop.'
    };
});
const features_4 = Array.apply(null, Array(1)).map(function () {
    return {
        id: 3,
        title: 'TEAM & SESSIONS',
        text: 'No matter when, you can easily create teams and manage them. View your historical meetings and resume them at any time. It\'s time to be a leader, make team productive, collaborative and efficient.'
    };
});
export default function ProductFeature() {
    return (
        <>
            <NavBar/>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'} marginTop="15%">RICH MEDIA + ONLINE = EFFICIENT MEETINGS</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        It is an online video tool that can solve the problem of convenience of communication in face to
                        face situations such as the epidemic, and make it possible to jointly edit documents, code and
                        draw diagrams while making online videos
                    </Text>
                </Stack>

                <Container maxW={'6xl'} mt={10} marginBottom="10%">
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                        {features_1.map((feature) => (
                            <HStack key={feature.id} align={'top'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon as={CheckIcon}/>
                                </Box>
                                <VStack align={'start'}>
                                    <Text fontWeight={600}>{feature.title}</Text>
                                    <Text color={'gray.600'}>{feature.text}</Text>
                                </VStack>
                            </HStack>
                        ))}
                        {features_2.map((feature) => (
                            <HStack key={feature.id} align={'top'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon as={CheckIcon}/>
                                </Box>
                                <VStack align={'start'}>
                                    <Text fontWeight={600}>{feature.title}</Text>
                                    <Text color={'gray.600'}>{feature.text}</Text>
                                </VStack>
                            </HStack>
                        ))}
                        {features_3.map((feature) => (
                            <HStack key={feature.id} align={'top'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon as={CheckIcon}/>
                                </Box>
                                <VStack align={'start'}>
                                    <Text fontWeight={600}>{feature.title}</Text>
                                    <Text color={'gray.600'}>{feature.text}</Text>
                                </VStack>
                            </HStack>
                        ))}
                        {features_4.map((feature) => (
                            <HStack key={feature.id} align={'top'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon as={CheckIcon}/>
                                </Box>
                                <VStack align={'start'}>
                                    <Text fontWeight={600}>{feature.title}</Text>
                                    <Text color={'gray.600'}>{feature.text}</Text>
                                </VStack>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
            <ChakraProvider>
                <ChakraFooter/>
            </ChakraProvider>
        </>
    );
}
