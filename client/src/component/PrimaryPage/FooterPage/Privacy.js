import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    VStack,
    useColorModeValue, ChakraProvider, Divider
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import NavBar from '../NavBar'
import { ChakraFooter } from '../FooterWithTwoColumns/App'

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Privacy() {
    return (
        <>
            <NavBar/>
            <Container maxW={'5xl'} py={12} marginTop="3%">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            Our commitment
                        </Text>
                        <Heading>Privacy Service Statement</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Your trust is very important to us, and we are fully aware of the importance of personal
                            information to you. We will take corresponding security measures according to the
                            requirements of laws and regulations, and try our best to protect your personal information
                            security and control.
                        </Text>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
                <Divider marginTop="5%"/>
                <VStack paddingTop="80px"
                        spacing="2"
                        fontFamily="heiti"
                        alignItems="flex-start">
                    <Text as="p" fontSize="lg" fontWeight="bold">
                        You must carefully read and fully understand this statement before using RTConfer's products or
                        services and confirm your full understanding and consent to use such products or services. By
                        beginning to use RTConfer's products or services, you have fully understood and agreed to this
                        statement.
                    </Text>
                    <Text as="p" fontSize="lg" fontWeight="bold" marginTop="3%">
                        1. Information collection
                    </Text>
                    <Text as="p" fontSize="lg">
                        (a) To create an account using RTConfer products and services, you need to provide data,
                        including your E-mail address, nickname, etc
                    </Text>
                    <Text as="p" fontSize="lg">
                        (b) You promise that the registered account name, profile picture and other information shall
                        not contain illegal and undesirable information, and shall not pretend to be others, otherwise
                        you shall bear relevant responsibilities.
                    </Text>
                    <Text as="p" fontSize="lg" fontWeight="bold" marginTop="2%">
                        2. Use of information
                    </Text>
                    <Text as="p" fontSize="lg">
                        (a) How we use your personal Data will depend on which services you use, how you use those
                        services and the choices you make in your use of RTConfer products and services.
                    </Text>
                    <Text as="p" fontSize="lg">
                        (b) We will take reasonable and practicable steps to avoid collecting personal information that
                        is not relevant to the purpose for which it is used. If we use your personal Information beyond
                        the stated purpose and directly or reasonably related to the use, we will separately inform you
                        and obtain your consent before using your personal Information. If we stop operating the
                        Services of the Platform, we will stop collecting your personal information in a timely manner
                        and delete or anonymize your personal information we hold in accordance with applicable laws.
                    </Text>
                    <Text as="p" fontSize="lg" fontWeight="bold" marginTop="2%">
                        3. Information storage
                    </Text>
                    <Text as="p" fontSize="lg">
                        Information and data collected about you by RTConfer products or services will be held on
                        servers related to our RTConfer products or services, and such information and data may be sent
                        to you or accessed, stored and displayed outside the country in which you are located or where
                        the information and data are collected. Where cross-border data transmission is involved, we
                        will conduct relevant assessment and filing procedures in accordance with the requirements of
                        the Cyber Security Law of the People's Republic of China and other relevant laws.
                    </Text>
                    <Text as="p" fontSize="lg" paddingTop="2%" fontWeight="bold">
                        Contact us
                    </Text>
                    <Text as="p" fontSize="lg">
                        Your information was provided by RTConfer products & Services. If you have any questions or
                        concerns about the way information has been handled, please contact us directly:
                    </Text>
                    <Text as="p" fontSize="lg">
                        Teda College of Nankai University, Binhai New Area, Tianjin
                    </Text>
                    <Text as="p" fontSize="lg">
                        Email address: iyangcell@163.com
                    </Text>
                </VStack>
            </Container>
            <ChakraProvider>
                <ChakraFooter/>
            </ChakraProvider>
        </>
    );
}
