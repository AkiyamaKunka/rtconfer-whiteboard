import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack, ChakraProvider
} from '@chakra-ui/react'
import NavBar from '../NavBar'
import { ChakraFooter } from '../FooterWithTwoColumns/App'

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};
const UserAgreement = () => {
    return (
        <>
            <NavBar/>
            <Container maxW={'7xl'} p="12">
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <BlogTags tags={['Agreement', 'Product']}/>
                        <Heading marginTop="1">Welcome to RTConfer products and services!</Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Before using RTConfer's products and services, you must read and comply with the RTConfer
                            product services agreement and the RTConfer product privacy statement on the RTConfer web
                            site, and be sure to read and fully understand these terms and conditions. It means that you
                            have fully read, understood and accepted all contents of this Agreement and this Agreement
                            becomes effective.
                        </Text>
                    </Box>
                </Box>
                <VStack paddingTop="80px"
                        marginLeft="80px"
                        marginRight="80px"
                        spacing="2"
                        fontFamily="heiti"
                        alignItems="flex-start">
                    <Text as="p" fontSize="lg" fontWeight="bold">
                        The parties to the contract
                    </Text>
                    <Text as="p" fontSize="lg">
                        This agreement is entered into between the user of the RTConfer products and services website
                        and the RTConfer products and services team.
                    </Text>
                    <Text as="p" fontSize="lg" fontWeight="bold" paddingTop="3%">
                        The service content
                    </Text>
                    <Text as="p" fontSize="lg">
                        1. we will through the RTConfer products provide service for you, at the same time, the team
                        will continue to enrich your use of this service terminals, forms, etc., if you are in the use
                        process have any dispute with a third party, we do not assume any responsibility, you know and
                        understand, if you get the money in this platform, please according to the tax law of the
                        People's Republic of China and other relevant laws, For tax declaration, please be aware that it
                        is a citizen's obligation to pay tax according to law, and we do not and cannot undertake the
                        duty of proxy payment. Meanwhile, please check the money transactions on the platform carefully,
                        and we do not assume any responsibility.
                    </Text>
                    <Text as="p" fontSize="lg">
                        2. The Service contains technical functions such as the creation and modification of projects,
                        design and analysis tools, etc. These functions and services may be optimized or modified
                        according to the changes of users' needs, due to different service versions or the unilateral
                        judgment of the service provider, or the provision may be postponed due to regular or irregular
                        maintenance.
                    </Text>
                    <Text as="p" fontSize="lg">
                        3. RTConer product and Service team has the right to change, upgrade, modify and transfer any
                        part of the service and its related functions and application software at its discretion.
                    </Text>
                    <Text as="p" fontSize="lg" fontWeight="bold" paddingTop="3%">
                        Registration and account management
                    </Text>
                    <Text as="p" fontSize="lg">
                        1. You acknowledge that at the time you complete the registration process or actually use the
                        Services in a manner otherwise permitted by RTConfer's products and services, you shall be a
                        natural person, legal person, or other organization with full civil capacity or capacity
                        appropriate to the civil conduct in which you engage. If you do not qualify as a subject, do not
                        use the services, otherwise you and your guardian will be responsible for all consequences
                        arising therefrom, and RTConfer products and services have the right to close (permanently
                        freeze) your account and to claim any damages from you and your guardian.
                    </Text>
                    <Text as="p" fontSize="lg">
                        2. You may register as an account using an email address provided or confirmed by you or in such
                        other manner as RTConfer Products and Services may allow, and you understand and agree that you
                        undertake to register such account name and other information as may not be contained in any
                        illegal or improper information, or may not impersonate another person, or register for another
                        person without your permission. You may not register an account in a manner that may be
                        misidentified by another user, or use a username that may infringe another person's rights,
                        otherwise RTConfer products and Services have the right to disregister or cease services and
                        withdraw your account at your own expense.
                    </Text>
                    <Text as="p" fontSize="lg">
                        3. You understand and agree that the ownership of the account registered with RTConfer Products
                        and Services belongs to RTConfer Products and Services and that, upon registration, you receive
                        only the right to use the account. RTConfer products and services account access only belongs to
                        the initial request registrant, transfer or in any way be provided to others, otherwise,
                        RTConfer products and services team has the right to immediately without further notice to
                        recover the account, the resulting for you to use this service of all data, information and so
                        on were empty, such as loss of losses, You should do it yourself.
                    </Text>
                    <Text as="p" fontSize="lg" fontWeight="bold" paddingTop="3%">
                        Service Usage Specification
                    </Text>
                    <Text as="p" fontSize="lg">
                        1. You fully understand and agree that RTConfer products only provide a platform for The
                        Services and that you are solely responsible for all actions and results you perform using the
                        Services. Accordingly, you should understand that you exercise your own judgment and act at your
                        own risk of unlawful or improper conduct (or information) by using RTConfer products and
                        services from others.
                    </Text>
                    <Text as="p" fontSize="lg">
                        2. You shall bear all expenses incurred by using the Service, including but not limited to
                        Internet traffic fee, communication service fee, etc.
                    </Text>
                    <Text as="p" fontSize="lg">
                        3. You promise not to use the Service for any illegal or improper activities, including but not
                        limited to the following:
                    </Text>
                    <Text as="p" fontSize="lg">
                        3.1 Upload, transmit or share information containing any of the following:
                    </Text>
                    <Text as="p" fontSize="lg" paddingTop="1%">
                        (a) opposed to the basic principles established by the Constitution;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (b) endanger state security, divulge state secrets, subvert state power or undermine national
                        unity;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (c) to the honour and interests of the State;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (d) Inciting ethnic hatred, ethnic discrimination or undermining ethnic unity;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (e) Undermining the state's religious policy and promoting cults and feudal superstition;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (f) Spreading rumours, disturbing social order or undermining social stability;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (g) spreading obscenity, pornography, gambling, violence, murder, terror or abetting a crime;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (h) insulting or defaming another person or infringing upon the lawful rights of another person;
                    </Text>
                    <Text as="p" fontSize="lg">
                        (i) is false, deceptive, harmful, coercive, intrusive, harassing, invasive, defamatory, vulgar,
                        obscene, or otherwise morally objectionable;
                    </Text>
                    <Text as="p" fontSize="lg">
                        3.3 Upload, transmit or share contents suspected of infringing other people's rights (including
                        but not limited to copyright, patent right, trademark right, trade secret and other intellectual
                        property rights);
                    </Text>
                    <Text as="p" fontSize="lg">
                        3.4 Acts that violate the "seven bottom lines" requirements of laws and regulations, the
                        socialist system, national interests, citizens' legitimate interests, public order, social
                        morals and customs, and information authenticity;

                    </Text>
                    <Text as="p" fontSize="lg">
                        3.5 Engage in any behavior in violation of Chinese laws, regulations, rules, policies and
                        normative documents.

                    </Text>
                    <Text as="p" fontSize="lg">
                        4. You promise not to do the following with the Software and Services:
                    </Text>
                    <Text as="p" fontSize="lg">
                        4.1 Upload, post, email or otherwise transmit information about software viruses or other
                        computer codes, files and programs that interfere with, damage or limit the functions of any
                        computer software, hardware or communications equipment;
                    </Text>
                    <Text as="p" fontSize="lg">
                        4.2 Interfere with or destroy the servers and networks of the Service or connected to the
                        Service, or violate any rules, procedures, policies or norms related to the network connected to
                        the Service;
                    </Text>
                    <Text as="p" fontSize="lg">
                        5. You undertake that you will strictly comply with this agreement when using RTConfer products
                        and services.
                    </Text>
                    <Text as="p" fontSize="lg">
                        6. You agree and accept that RTConfer's products and Services account has the right to review,
                        monitor, and take actions regarding your use of the Services, including, without limitation,
                        deleting information, suspending or terminating the Services, and reporting to appropriate
                        authorities.
                    </Text>
                    <Text as="p" fontSize="lg">
                        7. You undertake not to use the services in any way that would infringe the benefit of
                        RTConfer's products and services, or to do anything that might be detrimental to or detrimental
                        to the products and services of RTConfer.
                    </Text>
                    <Text as="p" fontSize="lg">
                        8. You fully understand and agree that you shall be responsible for all actions under your
                        registered account, including any content you post and any consequences arising therefrom. You
                        shall use your own judgment on the content to which you are exposed when using the Service and
                        assume all risks arising from the use of the Content, including risks arising from reliance on
                        the correctness, completeness or practicality of the Content. RTConfer's products and Services
                        team is not and will not be liable to you for any loss or damage resulting from any of the
                        foregoing risks.
                    </Text>
                    <Text as="p" fontSize="lg">
                        9. If the RTConfer Products and Services team finds or receives a report of a violation of this
                        Agreement by you, the RTConfer Products and Services Team has the right to verify, transfer
                        notice, delete, or shield such report, including, but not limited to, recall your account, in
                        accordance with applicable laws and regulations. Limit, suspend or terminate your use of the
                        Service in part or in whole, or seek legal liability.
                    </Text>
                    <Text as="p" fontSize="lg" paddingTop="2%" fontWeight="bold">
                        Service suspension or termination
                    </Text>
                    <Text as="p" fontSize="lg">
                        1. Given the specific nature of the Internet Services, RTConfer's products and Services team has
                        the right to make changes to the Services and to suspend, discontinue, or terminate all or any
                        part of the Services
                    </Text>
                    <Text as="p" fontSize="lg">
                        2. RTConfer products and Services Team has the right to immediately suspend or terminate
                        services against you and to require you to indemnify you for any of the following breaches:
                    </Text>
                    <Text as="p" fontSize="lg">
                        3.1 The user violates the registration obligation under registration and Account Management;
                    </Text>
                    <Text as="p" fontSize="lg">
                        3.2 The user violates the above provisions of the Service Usage Specifications;
                    </Text>
                    <Text as="p" fontSize="lg">
                        3.3 The user violates other content agreed by both parties.
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
};

export default UserAgreement;
