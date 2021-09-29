import React from 'react'
import classes from './SessionMainPage.module.css'
import VideoModule from './VideoModule'
import WhiteBoardBody from './WhiteBoard/WhiteBoardBody'
import ToolBar from './WhiteBoard/ToolBar'
import ShareBar from './WhiteBoard/ShareBar'

const SessionMainPage = () => {
    return (
        <>


            <VideoModule/>

            <WhiteBoardBody/>
        </>
    )
}

export default SessionMainPage
