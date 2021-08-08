import Sidebar from './SideBar'
import React, {useContext, useEffect} from 'react'
import { Route } from 'react-router-dom'
import ConferenceDisplayModule from './Conference/ConferenceDisplayModule'
import TeamDisplayModule from './Team/TeamDisplayModule'
import ApiDisplayTestModule from './Team/ApiDisplayTestModule.js'
import { SessionContext } from '../../store/session-context/session-context'
const UserMainPage = () => {

    const sessionCtx = useContext(SessionContext)
    useEffect(() => {
        sessionCtx.getAllSessions()
    }, [])

    return (
        <>

            <Sidebar style={{display: 'inline'}}>
                <Route path={`/user-profile-${localStorage.email}`} exact>
                    <h1>Welcome to your user profile!</h1>
                </Route>
                <Route path={`/user-profile-${localStorage.email}/conference`}>
                    <ConferenceDisplayModule/>
                </Route>
                <Route path={`/user-profile-${localStorage.email}/team`}>
                     

                <TeamDisplayModule></TeamDisplayModule>

                {/* <ApiDisplayTestModule></ApiDisplayTestModule> */}
                    
                     
                </Route>
            </Sidebar>

        </>
    )
}

export default UserMainPage
