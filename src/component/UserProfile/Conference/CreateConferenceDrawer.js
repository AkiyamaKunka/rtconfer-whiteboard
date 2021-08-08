import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    useColorModeValue,
    Stack,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    useDisclosure,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox
} from '@chakra-ui/react'
import React, { useState, useContext, useRef } from 'react'
import { BiVideoPlus } from 'react-icons/bi'
import { AuthContext } from '../../../store/auth-context/auth-context'
import { SessionContext } from '../../../store/session-context/session-context'
import DUMMY_DATA from '../../../assets/dummy-data/DUMMY_DATA'

const CreateConferenceDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const sessionNameRef = useRef()
    const descriptionRef = useRef()
    const sessionUrlRef = useRef()
    const sessionCtx = useContext(SessionContext)
    const authCtx = useContext(AuthContext)
    const [usersSelectedInSession, setUsersSelectedInSession] = useState(new Set())

    const addOrDeleteSelectedSessionMembersHandler = (idUser) => {
        console.log(idUser)
        if( usersSelectedInSession.has(idUser) ) { // delete this session candidate
            setUsersSelectedInSession(prev => new Set([...prev].filter(id => id !== idUser)))
        } else { // add this user to session candidate list
            setUsersSelectedInSession(prev => new Set([...prev, idUser]))
        }
        console.log(usersSelectedInSession)
    }

    const submitCreateSessionHandler = (event) => {
        event.preventDefault()
        const descriptionInput = descriptionRef.current.value
        const sessionNameInput = sessionNameRef.current.value
        const sessionUrlInput = sessionUrlRef.current.value
        console.log('session \'s url is' + sessionUrlInput)
        sessionCtx.createSession([...usersSelectedInSession], sessionNameInput, descriptionInput, sessionUrlInput)
        sessionCtx.getAllSessions() // update sessions info
    }

    return (
        <>
            <Button onClick={() => {
                onOpen()
                authCtx.getAllUsers()
            }}
                    variant="outline"
                    colorScheme="gray.700"
                    w={'180px'}
                    mr={4}
                    fontSize={'md'}
                    ml
                    bg={useColorModeValue('white', 'gray.700')}
                    color={'gray.700'}
                    rounded={'md'}
                    leftIcon={<BiVideoPlus/>}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                        color: 'white',
                        bg: 'blue.400'
                    }}
            >
                New Session
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={sessionNameRef}
                onClose={onClose}
            >
                <form onSubmit={submitCreateSessionHandler}>
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton color={'white'}/>
                        <DrawerHeader borderBottomWidth="1px" color={'white'} fontWeight="350">
                            Create New Session
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing="24px">
                                <Box>
                                    <FormLabel htmlFor="sessionName">Session Name</FormLabel>
                                    <Input
                                        ref={sessionNameRef}
                                        id="sessionName"
                                        placeholder="Please enter session name"
                                        maxLength={16}
                                    />
                                </Box>

                                <Box>
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex="1" textAlign="left">
                                                        User List
                                                    </Box>
                                                    <AccordionIcon/>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <Stack>
                                                    {authCtx.usersInfo.map((user) =>
                                                        <Checkbox
                                                            key={user.idUser}
                                                            size="md"
                                                            colorScheme="blue"
                                                            onChange={() => addOrDeleteSelectedSessionMembersHandler(user.idUser)}
                                                        >
                                                            {user.userName}
                                                        </Checkbox>)}
                                                </Stack>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="url">Url</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon>http://</InputLeftAddon>
                                        <Input
                                            type="text"
                                            id="url"
                                            ref={sessionUrlRef}
                                            placeholder="Enter domain"
                                            required={true}
                                        />
                                        <InputRightAddon>.com</InputRightAddon>
                                    </InputGroup>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="owner">Select Owner</FormLabel>
                                    <Select id="owner" defaultValue="segun">
                                        {DUMMY_DATA.dummyUsersWJJ.map((item) => <option
                                            value={item.username}>{item.username}</option>)}
                                    </Select>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="desc">Description</FormLabel>
                                    <Textarea id="desc" ref={descriptionRef} required={true}/>
                                </Box>
                            </Stack>

                        </DrawerBody>
                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" type="submit">Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    )
}
export default CreateConferenceDrawer
