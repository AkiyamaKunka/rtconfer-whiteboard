import Sidebar from './SideBar'
import React from 'react'
import { Route } from 'react-router-dom'
import TeamCard from './Team/TeamCard'
import ConferenceDisplayModule from './Conference/ConferenceDisplayModule'
import DUMMY_DATA from '../../assets/dummy-data/DUMMY_DATA'


const UserMainPage = () => {

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
                    <TeamCard dummyUsers={DUMMY_DATA.dummyUsersWBM1}/>
                </Route>
            </Sidebar>

        </>
    )
}

export default UserMainPage
