import React, {useState} from 'react'

export const AuthContext = React.createContext({
    token: '',
    isLogin: false,
    login: (token) => {
    },
    logout: () => {
    }
})

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [isLogin, setIsLogin ]= useState(!!token) // if token is empty, this will be false
    const loginHandler = (token) => {
        setToken(token)
        setIsLogin(!!token)
        console.log("logIn from Context!")
        console.log('isLogin is ' + isLogin)
        console.log('token is ' + token)
    }
    const logoutHander = () => {
        setToken(null)
        setIsLogin(false)
    }
    const AuthContextValue = {
        token: token,
        isLogin: isLogin,
        login: loginHandler,
        logout: logoutHander
    }
    return (
        <AuthContext.Provider value={AuthContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider







