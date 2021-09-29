import {
    Stack,
    Box,
    Button
} from '@chakra-ui/react'

import { React, useRef, useContext } from 'react'
import { TeamContext } from '../../../store/team-context/team-context'
import { AuthContext } from '../../../store/auth-context/auth-context'

const ApiDisplayTestModule = () => {
    const teamCtx = useContext(TeamContext)
    const authCtx = useContext(AuthContext)
    return (
        <>
            <Stack mt={8} direction={'row'} align={'center'} spacing={4}>
                <Box><Button onClick={() => {teamCtx.getAllTeams()}}>getAllTeams</Button></Box>
                <Box><Button onClick={() => {console.log(teamCtx.teamsInfo)}}>TeamsInfo</Button></Box>
                <Box><Button onClick={() => {console.log(authCtx.usersInfo)}}>getAllUsers</Button></Box>
                <Box><Button
                    onClick={() => teamCtx.addTeamMembers(teamCtx.teamsInfo.userInTeams[0].idTeam, localStorage.idUser)}>addNewMember</Button></Box>
                <Box><Button>deleteMember</Button></Box>
                <Box><Button></Button></Box>

            </Stack>
        </>
    )

}

export default ApiDisplayTestModule
