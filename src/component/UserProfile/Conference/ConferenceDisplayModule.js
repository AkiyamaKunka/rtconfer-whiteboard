import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../../../store/session-context/session-context'
import ConferenceCard from './ConferenceCard'
import DummyConferenceCard from './DummyConferenceCard'


let isLoad = false;
const ConferenceDisplayModule = (props) => {
    const sessionCtx = useContext(SessionContext)
    useEffect(async () => {
        await sessionCtx.getAllSessions()
        setTimeout(() => {isLoad = true} ,1000)
    }, [])
    return (
        <>
            {!isLoad && <DummyConferenceCard/>}
            {isLoad && sessionCtx.sessionsInfo.map((session) =>  <ConferenceCard key={session.idSession} session={session}/>)}
        </>
    )
}

export default ConferenceDisplayModule
