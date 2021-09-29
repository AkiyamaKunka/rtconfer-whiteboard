import React, { useContext, useEffect } from 'react'
import classes from './SessionMainPage.module.css'
import API_URL from '../../assets/config-api/api-url'
import { SessionContext } from '../../store/session-context/session-context'
import { Box, Flex, Button, Stack, Link, useColorModeValue, Slide, useDisclosure, CloseButton } from '@chakra-ui/react'
import { Link as ReactLink, useHistory } from 'react-router-dom'

import AgoraRTC from 'agora-rtc-sdk-ng'
import ShareBar from './WhiteBoard/ShareBar'
import ExitBar from './WhiteBoard/ExitBar'

const client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'})


const APP_ID = 'd1ff494c66034a888e2670ee64c9a928'
const APP_CERTIFICATE = '253b6f9cfc74462181d261f991457552'
const TOKEN = '006d1ff494c66034a888e2670ee64c9a928IAC8kOfjb1Gn0yYUPDMkQt2qJEsc8Tv/SWKIHWALQXA02Oba/18AAAAAEADjKAaAhMwQYQEAAQCDzBBh'


let rtc = {
    // 用来放置本地客户端。
    client: null,
    // 用来放置本地音视频频轨道对象。
    localAudioTrack: null,
    localVideoTrack: null
}

let options = {
    // 替换成你自己项目的 App ID。
    appId: '202645c1eca7451b91b257a41248cff5',
    // 传入目标频道名。
    channel: localStorage.getItem('idSession'),
    // 如果你的项目开启了 App 证书进行 Token 鉴权，这里填写生成的 Token 值。
    token: null
}

const sessionVideoEvent = async (sessionName) => {
    console.log('fetch sending info will be')
    console.log(sessionName)

    rtc.client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'})
    await rtc.client.on('user-published', async (user, mediaType) => {
        // 开始订阅远端用户。
        await rtc.client.subscribe(user, mediaType)
        console.log('subscribe success')

        // 表示本次订阅的是视频。
        if ( mediaType === 'video' ) {
            // 订阅完成后，从 `user` 中获取远端视频轨道对象。
            const remoteVideoTrack = user.videoTrack
            // 动态插入一个 DIV 节点作为播放远端视频轨道的容器。
            const playerContainer = document.createElement('div')
            // 给这个 DIV 节点指定一个 ID，这里指定的是远端用户的 UID。
            playerContainer.id = user.uid.toString()
            playerContainer.style.width = '230px'
            playerContainer.style.height = '180px'
            playerContainer.style.display = 'block'
            document.getElementById('remote-container').append(playerContainer)

            // 订阅完成，播放远端音视频。
            // 传入 DIV 节点，让 SDK 在这个节点下创建相应的播放器播放远端视频。
            remoteVideoTrack.play(playerContainer)

            // 也可以只传入该 DIV 节点的 ID。
            // remoteVideoTrack.play(playerContainer.id);
        }

        // 表示本次订阅的是音频。
        if ( mediaType === 'audio' ) {
            // 订阅完成后，从 `user` 中获取远端音频轨道对象。
            const remoteAudioTrack = user.audioTrack
            // 播放音频因为不会有画面，不需要提供 DOM 元素的信息。
            remoteAudioTrack.play()
        }
    })
    const uid = await rtc.client.join(options.appId, sessionName, options.token, null)
    // 通过麦克风采集的音频创建本地音频轨道对象。
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack()
    // 通过摄像头采集的视频创建本地视频轨道对象。
    rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack()
    // 将这些音视频轨道对象发布到频道中。
    await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack])

    const selfPlayerContainer = document.createElement('div')
    // 给这个 DIV 节点指定一个 ID，这里指定的是远端用户的 UID。
    selfPlayerContainer.id = uid.toString()
    selfPlayerContainer.style.width = '230px'
    selfPlayerContainer.style.height = '180px'
    selfPlayerContainer.style.display = 'block'
    document.getElementById('remote-container').append(selfPlayerContainer)
    rtc.localVideoTrack.play(selfPlayerContainer.id)

    console.log('publish success!')

    rtc.client.on('user-unpublished', (user, mediaType) => {
        if ( mediaType === 'video' ) {
            // 获取刚刚动态创建的 DIV 节点。
            const playerContainer = document.getElementById(user.uid.toString())
            // 销毁这个节点。
            playerContainer.remove()
        }
    })

}

const leaveSessionHandler = async () => {
    // 销毁本地音视频轨道。
    rtc.localAudioTrack.close()
    rtc.localVideoTrack.close()

    // 遍历远端用户。
    rtc.client.remoteUsers.forEach(user => {
        // 销毁动态创建的 DIV 节点。
        const playerContainer = document.getElementById(user.uid)
        playerContainer && playerContainer.remove()
    })

    // 离开频道。
    await rtc.client.leave()
}

const VideoModule = () => {
    const sessionCtx = useContext(SessionContext)

    useEffect(async () => {
        console.log('sessionUrl from context is' + sessionCtx.sessionUrl)
        await sessionVideoEvent(sessionCtx.sessionUrl.replace(/\//g, "-"))
    }, [])

    const {isOpen, onToggle} = useDisclosure()
    const videoIconHandler = async () => {
        console.log('clicked!')
        if ( !isOpen ) {
            await leaveSessionHandler()
            onToggle()
        } else {
            await onToggle()
            await sessionVideoEvent('junjiaChannel')
        }
    }
    const currentUrl = useHistory()
    const exitSessionHandler = async () => {
        if(!isOpen) await leaveSessionHandler()
        const path = '/user-profile/' + localStorage.getItem('email' + '/conference')
        currentUrl.push(path)
    }






    return (
        <>
            <ExitBar exitSession={exitSessionHandler} />
            <ShareBar openVideo={videoIconHandler} />

            <Slide direction="bottom" in={!isOpen} style={{zIndex: 10}} unmountOnExit={true}
                   className={classes['slide-customized']}>
                <Box
                    id="remote-container"
                    h="100vh"
                    w={'320px'}
                    p="40px"
                    color="white"
                    mt="4"
                    bg={'gray.100'}
                    rounded="md"
                    shadow="md"
                    overflow="scroll"
                >
                    <CloseButton size="md" color={'gray.900'} onClick={() => {
                        onToggle()
                        leaveSessionHandler()
                    }} right={'0px'}/>

                </Box>
            </Slide>
        </>
    )
}

export default VideoModule
