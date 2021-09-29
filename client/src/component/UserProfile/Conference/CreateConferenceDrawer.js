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
    Checkbox,
    Skeleton
} from '@chakra-ui/react'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { BiVideoPlus } from 'react-icons/bi'
import { AuthContext } from '../../../store/auth-context/auth-context'
import { SessionContext } from '../../../store/session-context/session-context'
import DUMMY_DATA from '../../../assets/dummy-data/DUMMY_DATA'
import API_URL from '../../../assets/config-api/api-url'



const CreateConferenceDrawer = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const sessionNameRef = useRef()
    const descriptionRef = useRef()
    const sessionUrlRef = useRef()
    const sessionCtx = useContext(SessionContext)
    const authCtx = useContext(AuthContext)
    const [usersSelectedInSession, setUsersSelectedInSession] = useState(new Set())
    const [teamsState, setTeamsState] = useState([])
    const [dis, setDis] = useState(false)

    const addOrDeleteSelectedSessionMembersHandler = (idUser) => {
        console.log(idUser)
        if ( usersSelectedInSession.has(idUser) ) { // delete this session candidate
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

    const getAllUsersWithTeamHandler = async () => {

        let TeamsWithAllInfo = []
        const responseTeams = await fetch(API_URL.getAllTeamsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
        if ( !responseTeams.ok ) {
            console.log(responseTeams)
        } else {
            const dataTeams = await responseTeams.json()
            for ( const item of dataTeams.userInTeams ) {
                const response = await fetch(API_URL.getTeamMembersUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token
                    },
                    body: JSON.stringify({
                        idTeam: item.idTeam
                    })
                })
                if (!response.ok) console.log(response)
                else{
                    const data = await response.json()
                    TeamsWithAllInfo.push([item.idTeam, item.teamName, data])
                }
            }
            for ( const item of dataTeams.userOwnTeams ) {
                const response = await fetch(API_URL.getTeamMembersUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token
                    },
                    body: JSON.stringify({
                        idTeam: item.idTeam
                    })
                })
                if (!response.ok) console.log(response)
                else{
                    const data = await response.json()
                    TeamsWithAllInfo.push([item.idTeam, item.teamName, data])
                }
            }
            setTeamsState(TeamsWithAllInfo)
            setDis(true)

        }
    }

    useEffect(() => {
        getAllUsersWithTeamHandler()
    }, [])
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
                                    <FormLabel>Select Team Members:</FormLabel>
                                </Box>
                                { !dis && <Stack><Skeleton height="20px" /><Skeleton height="20px" /><Skeleton height="20px" /></Stack>}

                                {teamsState.map( (item) => <Box>
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex="1" textAlign="left">
                                                        Team: {item[1]}
                                                    </Box>
                                                    <AccordionIcon/>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <Stack>
                                                    {item[2].map((user) =>
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
                                </Box>)}

                                <Box>
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex="1" textAlign="left">
                                                        All User List
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
                                    (Only select one person for once)
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
