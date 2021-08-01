import Sidebar from './SideBar'
import React, {use, useState} from 'react'
import ConferenceCard from './Conference/ConferenceCard'
import { Route } from 'react-router-dom'


import ConferenceDisplayModule from './Conference/ConferenceDisplayModule';

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
                        Biming Wen's team display module as another seperated component
                    </Route>
                </Sidebar>

        </>
    )
}

export default UserMainPage
