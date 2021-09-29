import React, { useContext, useEffect, useState } from 'react'
import { TeamContext } from '../../../store/team-context/team-context'
import TeamCard from './TeamCard'
import { Grid } from '@chakra-ui/react'
import DummyTeamCard from './DummyTeamCard'
const TeamDisplayModule = (props) => {
	const isOwner = (team) => {
		const index = userOwnTeams.find(
			(element) => element.idTeam === team.idTeam
		)
		if (index === undefined) {
			return false
		}
		return true
	}

	const [isLoad, setIsLoad] = useState(false)
	const teamCtx = useContext(TeamContext)
	const userInTeams = teamCtx.teamsInfo.userInTeams
	const userOwnTeams = teamCtx.teamsInfo.userOwnTeams
	useEffect(() => {
		let ref = setTimeout(() => {
			teamCtx.getAllTeams()
			setIsLoad(true)
		}, 1500)
	}, [])

	console.log(userInTeams, userOwnTeams)

	return (
		<Grid templateColumns='repeat(4, 1fr)' gap={0}>
			{!isLoad && <DummyTeamCard></DummyTeamCard>}
			{isLoad &&
				userInTeams.map((team) => (
					<TeamCard
						idTeam={team.idTeam}
						teamName={team.teamName}
						isOwner={isOwner(team)}
					></TeamCard>
				))}
		</Grid>
	)
}

export default TeamDisplayModule
