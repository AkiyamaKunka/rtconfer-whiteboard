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
    const [isLogin, setIsLogin ]= useState(!!token) // if token is empty, this will be false
    const loginHandler = (token, userEmail) => {
        setToken(token)
        setIsLogin(true)
        setEmail(userEmail)
        localStorage.setItem('token', token)
        localStorage.setItem('email', userEmail)
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







