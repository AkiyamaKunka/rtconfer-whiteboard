import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import API_URL from '../../assets/config-api/api-url'
import DUMMY_DATA from '../../assets/dummy-data/DUMMY_DATA'
import { useToast } from '@chakra-ui/react'

export const SessionContext = React.createContext({

    sessionsInfo: [],
    idCreatedSession: '',
    sessionUrl: '',
    getAllSessions: () => {
    },
    deleteSession: (idSession) => {
    },
    createSession: (idMembers, sessionName, description, sessionUrl) => {
    }
})

const SessionContextProvider = (props) => {
    const currentUrl = useHistory()
    const successSessionCreatedToast = useToast()
    const errorSessionCreatedToast = useToast()
    const errorGetAllSessionsToast = useToast()
    const [sessionsInfoServer, setSessionsInfoServer] = useState(DUMMY_DATA.dummySessionsInfoWJJ)
    const [idCreatedSessionServer, setIdCreatedSessionServer] = useState('')
    const [sessionUrlUser, setSessionUrlUser] = useState('')

    const getAllSessionsHandler = () => {
        console.log('trying get all sessions!')
        fetch(( API_URL.getAllSessionsUrl ), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then((response) => {
            if( response.ok ) {
                return response.json()
            } else {
                return response.json().then((data) => {
                    throw new Error(data)
                })
            }
        }).then((data) => {
            setSessionsInfoServer(data)
            console.log('get sessionsInfo')
        }).catch((error) => {
            // alert(error.data)
            errorGetAllSessionsToast({
                title: 'An error occurred.',
                description: 'sessionsInfo cannot get from server',
                status: 'error',
                duration: 4000,
                isClosable: true
            })
        })
    }
    const createSessionHandler = (idMembers, sessionName, description, sessionUrlInput) => {
        console.log('createSession called in session-context!')
        console.log(idMembers)
        console.log(sessionName)
        console.log(description)
        console.log(sessionUrlInput)
        console.log(localStorage.idUser)

        // should move logic to the fetch API, but for I just wanna create a new session
        // so the session will be created in the following url
        setSessionUrlUser('/session/' + sessionUrlInput)
        console.log('user url is ' + sessionUrlUser)
        let preJsonMembers = new Array()
        idMembers.map((id) => {
            let convertedIdMembers = {}
            convertedIdMembers['idUser'] = id
            preJsonMembers.push(convertedIdMembers)
        })

        console.log(preJsonMembers)

        fetch(( API_URL.createSessionUrl ), {
            method: 'POST',
            body: JSON.stringify(
                {
                    participants: preJsonMembers,
                    sessionName: sessionName,
                    description: description,
                    owner: localStorage.idUser,
                    sessionUrl: '/session/' + sessionUrlInput
                }
            ),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then((response) => {
            console.log(response.status)
            if( response.status === 201 ) {
                console.log('in if')
                return response.json()
            } else {
                console.log('in else')
                return response.json().then((data) => {
                    const errorMessage = 'Authentication failed!'
                    throw new Error(errorMessage)
                })
            }
        }).then( async (data) => {
            //setIdCreatedSessionServer(data.idSession)
            console.log('work to here')
            localStorage.setItem('sessionUrl', '/session/' + sessionUrlInput)
            console.log('work to here')
            localStorage.setItem('idSession', data.idSession)
            console.log('work to here')
            await successSessionCreatedToast({
                title: 'Session created.',
                description: 'We\'ve created your session for you.',
                status: 'success',
                duration: 4000,
                isClosable: true
            })
            getAllSessionsHandler()
        }).catch((error) => {
            errorSessionCreatedToast({
                title: 'An error occurred.',
                description: 'Unable to create your session.',
                status: 'error',
                duration: 4000,
                isClosable: true
            })
        })
    }
    const deleteSessionHandler = (idSession) => {
        fetch(( API_URL.deleteSessionUrl ), {
            method: 'DELETE',
            body: JSON.stringify(
                {
                    idSession: idSession
                }
            ),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then((response) => {
            if( response.ok ) {
                return response.json()
            } else {
                return response.json().then((data) => {
                    throw new Error(data)
                })
            }
        }).then((data) => {
            successSessionCreatedToast({
                title: 'Session deleted.',
                status: 'warning',
                duration: 4000,
                isClosable: true
            })
            console.log('deleted session ' + idSession)
            getAllSessionsHandler()

        }).catch((error) => {
            console.log(error.data)
            console.log('failed to delete idSession: ' + idSession)
        })
    }
    const SessionContextValue = {
        sessionsInfo: sessionsInfoServer,
        idCreatedSession: idCreatedSessionServer,
        sessionUrl: sessionUrlUser,
        getAllSessions: getAllSessionsHandler,
        deleteSession: deleteSessionHandler,
        createSession: createSessionHandler
    }

    return (
        <SessionContext.Provider value={SessionContextValue}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider
