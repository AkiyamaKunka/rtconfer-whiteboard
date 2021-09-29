import React, { useContext, useEffect } from "react"
import { TeamContext } from "../../../store/team-context/team-context"
import TeamCard from "./TeamCard"
import { Grid } from "@chakra-ui/react"

const TeamDisplayModule = (props) => {
    const isOwner = (team) => {
        const index = userOwnTeams.find((element) => element.idTeam === team.idTeam)
        if( index < 0 ) {
            return false
        } else {
            return true
        }
    }

    const teamCtx = useContext(TeamContext)

    useEffect(() => {
        teamCtx.getAllTeams()
    }, [])

    const userInTeams = teamCtx.teamsInfo.userInTeams
    const userOwnTeams = teamCtx.teamsInfo.userOwnTeams
    console.log(userInTeams, userOwnTeams)

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={7}>
            {userInTeams.map((team) =>
                <TeamCard teamName={team.teamName} isOwner={isOwner(team)}></TeamCard>
            )}
        </Grid>
    )
}

export default TeamDisplayModule
