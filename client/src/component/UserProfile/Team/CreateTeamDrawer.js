import React, { useContext, useEffect } from 'react'
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
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { TeamContext } from '../../../store/team-context/team-context'
import { AuthContext } from '../../../store/auth-context/auth-context'

function CreateTeamDrawer() {
	const teamCtx = useContext(TeamContext)
	const authCtx = useContext(AuthContext)

	useEffect(() => {
		authCtx.getAllUsers()
	}, [])

	const { isOpen, onOpen, onClose } = useDisclosure()
	const teamNameInputRef = React.useRef()
	const teamDescriptionRef = React.useRef()

	let idSelectedUsers = []

	const submitHandler = () => {
		const idOwner = localStorage.idUser
		if (idSelectedUsers.find((id) => id === idOwner) === undefined) {
			idSelectedUsers.push(idOwner)
		}
		const idMembers = idSelectedUsers
		const teamName = teamNameInputRef.current.value
		const description = teamDescriptionRef.current.value

		console.log(idOwner, idMembers, teamName, description)
		teamCtx.createTeam(idOwner, [...idMembers], teamName, description)
		teamCtx.getAllTeams()
	}

	const selectedUserHandler = (idUser) => {
		console.log('select handler called')
		const index = idSelectedUsers.indexOf(idUser)
		if (index < 0) {
			idSelectedUsers.push(idUser)
		} else {
			idSelectedUsers.splice(index, 1)
		}

		console.log(idSelectedUsers)
	}

	const cancelHandler = () => {
		idSelectedUsers = []
		onClose()
	}

	return (
		<>
			<Button
				onClick={onOpen}
				variant='outline'
				colorScheme='gray.700'
				w={'180px'}
				mr={4}
				fontSize={'md'}
				ml
				bg={useColorModeValue('white', 'gray.700')}
				color={'gray.700'}
				rounded={'md'}
				leftIcon={<AddIcon />}
				_hover={{
					transform: 'translateY(-2px)',
					boxShadow: 'lg',
					color: 'white',
					bg: 'blue.400',
				}}
			>
				New Team
			</Button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				initialFocusRef={teamNameInputRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton color={'white'} />
					<DrawerHeader
						borderBottomWidth='1px'
						color={'white'}
						fontWeight='350'
					>
						Create your Team
					</DrawerHeader>
					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<FormLabel htmlFor='teamname'>
									Team name
								</FormLabel>
								<Input
									ref={teamNameInputRef}
									id='teamname'
									placeholder='Please enter your team name'
									maxLength={16}
								/>
							</Box>

							<Box>
								<FormLabel htmlFor='chooseMember'>
									Choose your members
								</FormLabel>

								<SimpleGrid column={2} spacing={2}>
									{authCtx.usersInfo.map((person) => (
										<Checkbox
											key={person.idUser}
											value={person.userName}
											onChange={() =>
												selectedUserHandler(
													person.idUser
												)
											}
										>
											{person.userName}
										</Checkbox>
									))}
								</SimpleGrid>
							</Box>
							<Box>
								<FormLabel htmlFor='team description'>
									Description
								</FormLabel>
								<Textarea
									ref={teamDescriptionRef}
									required={true}
									placeholder='Please write some info for your team'
								/>
							</Box>
						</Stack>
					</DrawerBody>

					<DrawerFooter>
						<Button
							variant='outline'
							mr={3}
							onClick={cancelHandler}
						>
							Cancel
						</Button>
						<Button colorScheme='blue' onClick={submitHandler}>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}
export default CreateTeamDrawer
