import React, { useContext } from 'react'
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList
} from '@chakra-ui/react'
import {
    FiHome,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown
} from 'react-icons/fi'
import { AiOutlineTeam } from 'react-icons/ai'
import { FaLaptop } from 'react-icons/fa'
import { Link as ReactLink } from 'react-router-dom'
import { AuthContext } from '../../store/auth-context/auth-context'
import CreateConferenceDrawer from './Conference/CreateConferenceDrawer'
import CreateTeamDrawer from './Team/CreateTeamDrawer'

const LinkItems = [
    { name: 'Home', icon: FiHome, toLink: '/welcome' },
    {
        name: 'Team',
        icon: AiOutlineTeam,
        toLink: `/user-profile/${localStorage.email}/team`
    },
    {
        name: 'Conference',
        icon: FaLaptop,
        toLink: `/user-profile/${localStorage.email}/conference`
    },
    // { name: 'Settings', icon: FiSettings, toLink: '#' }
]

export default function Sidebar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen}/>
            <Box ml={{ base: 0, md: 60 }} p="4">
                {props.children}
            </Box>
        </Box>
    )

}

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    RTConfer
                </Text>

                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}/>
            </Flex>
            {LinkItems.map((link) => (
                <Link
                    as={ReactLink}
                    to={link.toLink}
                    style={{ textDecoration: 'none' }}
                >
                    <NavItem key={link.name} icon={link.icon}>
                        {link.name}
                    </NavItem>
                </Link>
            ))}
        </Box>
    )
}
const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'blue.400',
                    color: 'white'
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white'
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    )
}

const MobileNav = ({ onOpen, ...rest }) => {
    const authCtx = useContext(AuthContext)

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />
            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
                RTConfer
            </Text>

            <CreateTeamDrawer/>
            <CreateConferenceDrawer/>

            <HStack spacing={{ base: '0', md: '6' }}>
                {/*<IconButton*/}
                {/*    size="lg"*/}
                {/*    variant="ghost"*/}
                {/*    aria-label="open menu"*/}
                {/*    icon={<FiBell/>}*/}
                {/*/>*/}
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{localStorage.userName}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        user
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown/>
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            zIndex={'9999999'}
                        >
                            <Link as={ReactLink}
                                  to="/welcome"
                                  onClick={() => {
                                      authCtx.logout()
                                  }}
                                  style={{ textDecoration: 'none' }}
                            >
                                <MenuItem>Log out</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    )
}
