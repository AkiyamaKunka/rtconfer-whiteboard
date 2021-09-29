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
                <Route path={'/user-profile/:email'} exact>
                    <Heading size="lg" fontSize="60px" marginLeft="14%" marginTop="16%" >
                        "Welcome." -- Akiyama
                    </Heading>
                </Route>
                <Route path={`/user-profile/:email/conference`}>
                    <ConferenceDisplayModule/>
                </Route>
                <Route path={`/user-profile/:email/team`}>
                <TeamDisplayModule/>
                {/* <ApiDisplayTestModule></ApiDisplayTestModule> */}
                </Route>
            </Sidebar>
        </>
    )
}

export default UserMainPage
