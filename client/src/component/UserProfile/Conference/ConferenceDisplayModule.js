import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../../../store/session-context/session-context'
import ConferenceCard from './ConferenceCard'
import DummyConferenceCard from './DummyConferenceCard'
import { Grid } from "@chakra-ui/react"


let isLoad = false
const ConferenceDisplayModule = (props) => {
    const sessionCtx = useContext(SessionContext)
    useEffect(async () => {
        await sessionCtx.getAllSessions()
        setTimeout(() => {
            isLoad = true
        }, 1000)
    }, [])
    return (
        <>
            <Grid templateColumns="repeat(4, 1fr)" gap={0}>
                {!isLoad && <DummyConferenceCard/> }
                {isLoad && sessionCtx.sessionsInfo.map((session) => <ConferenceCard key={session.idSession} session={session}/>)}
            </Grid>
        </>
    )
}

export default ConferenceDisplayModule
