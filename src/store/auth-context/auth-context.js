import React, {useState} from 'react'

export const AuthContext = React.createContext({
    token: '',
    isLogin: false,
    email: '',
    login: (token) => {
    },
    logout: () => {
    }
})

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.token)
    const [email, setEmail] = useState(localStorage.email)
    const [username, setUsername] = useState('')
    const [isLogin, setIsLogin ]= useState(!!token) // if token is empty, this will be false
    const loginHandler = (token, userEmail, userName, idUser) => {
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
    }
    const logoutHandler = () => {
        setToken(null)
        setEmail(null)
        setIsLogin(false)
        localStorage.clear()
    }
    const AuthContextValue = {
        token: token,
        isLogin: isLogin,
        email: email,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={AuthContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider







