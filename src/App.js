import PrimaryPage from './component/PrimaryPage/PrimaryPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import React, { Fragment, useContext, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ChakraFooter } from './component/PrimaryPage/FooterWithTwoColumns/App'
import SignUp from './component/SignUpPage/SignUp'
import WithSubnavigation from './component/SignUpPage/NavigationBar'
import AuthContextProvider from './store/auth-context/auth-context'
import LoginModule from './component/LogInPage/LoginWithCentredForm/LoginModule'
import UserMainPage from './component/UserProfile/UserMainPage'
import AboutUs from './component/AboutUsPage/AboutUs'
import SessionContextProvider, { SessionContext } from './store/session-context/session-context'
import SessionMainPage from './component/SessionPage/SessionMainPage'
import TeamContextProvider from './store/team-context/team-context'


function App () {
    const sessionCtx = useContext(SessionContext)
    useEffect(() => {
        sessionCtx.getAllSessions()
    }, [])
    return (
        <Fragment>
            <Switch>
                <TeamContextProvider>
                    <SessionContextProvider>
                        <AuthContextProvider>
                            <Route path="*" exact>
                                <Redirect to="/welcome"/>
                            </Route>
                            <Route path="/welcome" exact>
                                <PrimaryPage/>
                                <ChakraProvider>
                                    <ChakraFooter/>
                                </ChakraProvider>
                            </Route>

                            <Route path="/sign-up">
                                <ChakraProvider>
                                    <WithSubnavigation/>
                                    <SignUp/>
                                </ChakraProvider>
                            </Route>

                            <Route path="/login">
                                <ChakraProvider>
                                    <LoginModule/>
                                </ChakraProvider>
                            </Route>
                            <Route path="/about_us">
                                <ChakraProvider>
                                    <AboutUs/>
                                </ChakraProvider>
                            </Route>
                            <Route path={`/user-profile-${localStorage.email}`}>
                                <ChakraProvider>
                                    <UserMainPage/>
                                </ChakraProvider>
                            </Route>

                            {/*<Route path={sessionCtx.sessionUrl} exact>*/}
                            <Route path="/session/:sessionUrl" exact>
                                <ChakraProvider>
                                    <SessionMainPage/>
                                </ChakraProvider>
                            </Route>

                        </AuthContextProvider>
                    </SessionContextProvider>
                </TeamContextProvider>
            </Switch>
        </Fragment>
    )
}

export default App
