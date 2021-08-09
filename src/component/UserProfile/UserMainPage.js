import Sidebar from './SideBar'
import React, {useContext, useEffect} from 'react'
import { Route } from 'react-router-dom'
import ConferenceDisplayModule from './Conference/ConferenceDisplayModule'
import TeamDisplayModule from './Team/TeamDisplayModule'
import ApiDisplayTestModule from './Team/ApiDisplayTestModule.js'
import { SessionContext } from '../../store/session-context/session-context'
import { Skeleton, SkeletonCircle, SkeletonText, Box, Heading } from "@chakra-ui/react"


const UserMainPage = () => {



    return (
        <>

            <Sidebar style={{display: 'inline'}}>
                <Route path={`/user-profile-${localStorage.email}`} exact>
                    <Heading size="lg" fontSize="50px" >
                        "Welcome." -- Akiyama
                    </Heading>
                </Route>
                <Route path={`/user-profile-${localStorage.email}/conference`}>
                    <ConferenceDisplayModule/>
                </Route>
                <Route path={`/user-profile-${localStorage.email}/team`}>
                <TeamDisplayModule/>
                {/* <ApiDisplayTestModule></ApiDisplayTestModule> */}
                </Route>
            </Sidebar>
        </>
    )
}

export default UserMainPage
