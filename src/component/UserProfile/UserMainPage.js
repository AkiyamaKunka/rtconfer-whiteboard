import SidebarWithHeader from "./SideBar";
import React from 'react'
import ConferenceCard from "./Conference/ConferenceCard";
import {Switch, Route, useLocation} from 'react-router-dom'

const UserMainPage = () => {
    const currentBaseUrl = useLocation()
    return (
        <>
            <SidebarWithHeader style={{display: 'inline'}}>
                <Route path={`/user-profile-${localStorage.email}`} exact>
                <h1>Welcome to your user profile!</h1>
                </Route>
                <Route path={`/user-profile-${localStorage.email}/conference`}>
                    <ConferenceCard/>
                    <ConferenceCard/>
                    <ConferenceCard/>
                    <ConferenceCard/>
                </Route>
                <Route path={`/user-profile-${localStorage.email}/team`}>
                    <ConferenceCard/>
                    <ConferenceCard/>
                </Route>
            </SidebarWithHeader>
        </>
    )
}

export default UserMainPage