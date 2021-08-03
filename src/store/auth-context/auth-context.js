import React, { useState } from 'react'
import DUMMY_DATA from '../../assets/dummy-data/DUMMY_DATA'
import API_URL from '../../assets/config-api/api-url'
import { useHistory } from 'react-router-dom'

export const AuthContext = React.createContext({
    token: '',
    isLogin: false,
    usersInfo: [],
    email: '',
    signIn: (enteredEmail, enteredPassword, enteredUsername) => {
    },
    login: (enteredEmail, enteredPassword) => {
    },
    logout: () => {
    },
    getAllUsers: () => {
    }
})

const AuthContextProvider = (props) => {

    const [usersInfoServer, setUsersInfoServer] = useState(DUMMY_DATA.dummyUsersInfoWJJ)
    const [token, setToken] = useState(localStorage.token)
    const [email, setEmail] = useState(localStorage.email)
    const [isLogin, setIsLogin] = useState( !!token) // if token is empty, this will be false
    const loginStatusSetHandler = (token, userEmail, userName, idUser, currentUrl) => {
        setToken(token)
        setIsLogin(true)
        setEmail(userEmail)
        localStorage.setItem('token', token)
        localStorage.setItem('userName', userName)
        localStorage.setItem('email', userEmail)
        localStorage.setItem('idUser', idUser)
        console.log('logIn from Context!')
        console.log('isLogin is ' + isLogin)
        console.log('token is ' + token)
        currentUrl.push('/welcome') // don't know if this will work
    }
    const logoutHandler = () => {
        setToken(null)
        setEmail(null)
        setIsLogin(false)
        localStorage.clear()
    }
    const getAllUsersHandler = () => {
        console.log('trying to get users from server')
        // console.log(localStorage.token)
        fetch((API_URL.getAllUsersUrl), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then((response) => {
            console.log(response)
            console.log('response should be here!')
            if ( response.ok ) {
                return response.json()
            } else {
                return response.json().then((data) => {
                    console.log(response)
                    throw new Error(data)
                })
            }
        }).then((data) => {
            console.log('get users from server')
            setUsersInfoServer(data)
        }).catch((error) => {
            console.log('cannot get users from server')
            console.log(error.data)
        })
    }
    const loginHandler = (enteredEmail, enteredPassword, currentUrl) => {
        fetch((API_URL.loginUrl),
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: enteredEmail,
                        password: enteredPassword
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            if ( response.ok ) {
                return response.json()
            } else {
                return response.json.then((data) => {
                    const errorMessage = 'Login Failed!'
                    throw new Error(errorMessage)
                })
            }
        }).then((data) => {
            loginStatusSetHandler(data.token, enteredEmail, data.user.userName, data.user.idUser, currentUrl)
            alert('Login!')
        }).catch((error) => {
            alert(error.errorMessage)
        })
    }
    const signInHandler = (enteredEmail, enteredPassword, enteredUsername, currentUrl) => {
        fetch((API_URL.signUpUrl),
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: enteredEmail,
                        password: enteredPassword,
                        userName: enteredUsername
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {

                console.log(response)
                // console.log(response.json().token)
                if ( response.ok ) {
                    setIsLogin(true)
                    return response.json()
                } else {
                    return response.json().then((data) => {
                            const errorMessage = 'Authentication failed!'
                            throw new Error(errorMessage)
                        }
                    )
                }
            }
        ).then((data) => {
            console.log(data)
            loginStatusSetHandler(data.token, enteredEmail, enteredUsername, data.user.idUser, currentUrl)
            const remindMessage = 'Sign Up!'
            alert(remindMessage)
        }).catch((error) => {
            alert(error.errorMessage)
        })
    }


    const AuthContextValue = {
        token: token,
        isLogin: isLogin,
        usersInfo: usersInfoServer,
        email: email,
        signIn: signInHandler,
        login: loginHandler,
        logout: logoutHandler,
        getAllUsers: getAllUsersHandler
    }
    return (
        <AuthContext.Provider value={AuthContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider







