import React, { useState, useContext, useEffect } from 'react'
import {
    Checkbox,
    Drawer,
    Button,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Input,
    DrawerFooter,
    SimpleGrid,
    Stack,
    Box,
    FormLabel,
    useColorModeValue
} from '@chakra-ui/react'
import DUMMY_DATA from '../../../assets/dummy-data/DUMMY_DATA'
import { AddIcon } from '@chakra-ui/icons'
import { TeamContext } from '../../../store/team-context/team-context.'
import { AuthContext } from '../../../store/auth-context/auth-context'


function CreateTeamDrawer (props) {


    const teamCtx = useContext(TeamContext)
    const authCtx = useContext(AuthContext)

    useEffect(() => {
            console.log(authCtx.getAllUsers())
        }, [])


    const {isOpen, onOpen, onClose} = useDisclosure()
    const teamNameInputRef = React.useRef()


    let selectedUsers = []

    const submitHandler = (event) => {
        console.log(teamNameInputRef.current.value)
        console.log(selectedUsers)

        selectedUsers = []
        onClose()
    }

    const selectedUserHandler = (event) => {
        if ( event.target.checked ) {
            selectedUsers.push(event.target.value)
        } else {
            const index = selectedUsers.indexOf(event.target.value)
            selectedUsers.splice(index, 1)
        }
    }

    const cancelHandler = () => {
        selectedUsers = []
        onClose()
    }


    return (
        <>
            <Button
                onClick={onOpen}
                variant="outline"
                colorScheme="gray.700"
                w={'180px'}
                mr={4}
                fontSize={'md'}
                ml
                bg={useColorModeValue('white', 'gray.700')}
                color={'gray.700'}
                rounded={'md'}
                leftIcon={<AddIcon/>}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    color: 'white',
                    bg: 'blue.400'
                }}
            >
                New Team
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                initialFocusRef={teamNameInputRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader
                        borderBottomWidth="1px"
                        color={'white'}
                        fontWeight="350"
                    >
                        Create your Team
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>
                                <FormLabel htmlFor="teamname">Team name</FormLabel>
                                <Input
                                    ref={teamNameInputRef}
                                    id="teamname"
                                    placeholder="Please enter your team name"

                                ></Input>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="chooseMember">
                                    Choose your members
                                </FormLabel>

                                <SimpleGrid column={2} spacing={2}>
                                    {DUMMY_DATA.dummyUsersWBM2.map((person) => (
                                        <Checkbox
                                            value={person.name}
                                            onChange={selectedUserHandler}
                                        >
                                            {person.name}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={cancelHandler}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={submitHandler}>
                            Save

                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CreateTeamDrawer 

