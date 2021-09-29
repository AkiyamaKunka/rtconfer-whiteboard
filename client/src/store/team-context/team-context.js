import React, { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import API_URL from '../../assets/config-api/api-url'
import DUMMY_DATA from '../../assets/dummy-data/DUMMY_DATA'

export const TeamContext = React.createContext({
	teamMembers: [],
	teamsInfo: {},
	idCreatedTeam: '',
	createTeam: (idOwner, idMembers, teamName, description) => {},
	getAllTeams: () => {},
	getTeamMembers: (idTeam) => {},
	addTeamMembers: () => {},
})

const TeamContextProvider = (props) => {
	const errorToast = useToast()
	const successToast = useToast()
	const [teamsInfoServer, setTeamsInfoServer] = useState(
		DUMMY_DATA.dummyTeamsInfoWBM2
	)
	const [idCreatedTeamServer, setIdCreatedTeamServer] = useState('')
	const [teamMemberServer, setTeamMemberServer] = useState(
		DUMMY_DATA.dummyTeamMemberInfoWBM4
	)

	const getTeamMembersHandler = (idTeam) => {
		console.log('trying to get team member')
		fetch(API_URL.getTeamMembersUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.token,
			},
			body: JSON.stringify({
				idTeam: idTeam,
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					return response.json().then((data) => {
						throw new Error(data)
					})
				}
			})
			.then((data) => {
				console.log('get members info')
				console.log(data)
				setTeamMemberServer(data)
			})
			.catch((error) => {
				errorToast({
					title: 'An error occurred.',
					description: 'members info error!',
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
				console.log(error)
			})
	}

	const addTeamMembersHandler = (idTeam, idMembers) => {
		console.log('trying to add team member')
		let preJsonMembers = new Array()
		idMembers.map((id) => {
			let convertedIdMembers = {}
			convertedIdMembers['idUser'] = id
			preJsonMembers.push(convertedIdMembers)
		})

		fetch(API_URL.addTeamMembersUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.token,
			},
			body: JSON.stringify({
				idTeam: idTeam,
				newTeamMembers: preJsonMembers, // yyy modified at 11:00 21/8/3
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					return response.json().then((data) => {
						throw new Error(data)
					})
				}
			})
			.then((data) => {
				console.log('susccessfully add members')
				console.log(data)
			})
			.catch((error) => {
				errorToast({
					title: 'An error occurred.',
					description: 'members info error!',
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
				console.log('Msg: ' + error)
			})
	}

	const getAllTeamsHandler = () => {
		console.log('trying to get all teams ')
		fetch(API_URL.getAllTeamsUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.token,
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					return response.json().then((data) => {
						throw new Error(data)
					})
				}
			})
			.then((data) => {
				console.log('get all teams info')
				console.log(data)
				setTeamsInfoServer(data)
			})
			.catch((error) => {
				errorToast({
					title: 'An error occurred.',
					description: 'members info error!',
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
				console.log(error)
			})
	}

	const createTeamHandler = (idOwner, idMembers, teamName, description) => {
		console.log('create team called')
		console.log(idOwner, idMembers, teamName, description)

		let preJsonMembers = new Array()
		idMembers.map((id) => {
			let convertedIdMembers = {}
			convertedIdMembers['idUser'] = id
			preJsonMembers.push(convertedIdMembers)
		})

		fetch(API_URL.createTeamUrl, {
			method: 'POST',
			body: JSON.stringify({
				owner: idOwner,
				members: preJsonMembers,
				teamName: teamName,
				description: description,
			}),
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.token,
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					return response.json().then((data) => {
						throw new Error(data)
					})
				}
			})
			.then((data) => {
				//setTeamInfoServer(data)
				console.log(data.idTeam)
				setIdCreatedTeamServer(data.idTeam)
				successToast({
					title: 'Team created.',
					description: "We've created your team for you.",
					status: 'success',
					duration: 4000,
					isClosable: true,
				})
			})
			.catch((error) => {
				errorToast({
					title: 'An error occurred.',
					description: 'Failed to create team.',
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
			})
	}

	const TeamContextValue = {
		createTeam: createTeamHandler,
		getAllTeams: getAllTeamsHandler,
		teamsInfo: teamsInfoServer,
		idCreatedTeam: idCreatedTeamServer,
		getTeamMembers: getTeamMembersHandler,
		addTeamMembers: addTeamMembersHandler,
		teamMembers: teamMemberServer,
	}

	return (
		<TeamContext.Provider value={TeamContextValue}>
			{props.children}
		</TeamContext.Provider>
	)
}

export default TeamContextProvider
