import PrimaryPage from './component/PrimaryPage/PrimaryPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import React, { Fragment, useContext } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ChakraFooter } from './component/PrimaryPage/FooterWithTwoColumns/App'
import SignUp from './component/SignUpPage/SignUp'
import WithSubnavigation from './component/SignUpPage/NavigationBar'
import AuthContextProvider from './store/auth-context/auth-context'
import LoginModule from './component/LogInPage/LoginWithCentredForm/LoginModule'
import UserMainPage from './component/UserProfile/UserMainPage'
import AboutUs from './component/AboutUsPage/AboutUs'
import SessionContextProvider, { SessionContext } from './store/session-context/session-context'


function App () {
    const sessionCtx = useContext(SessionContext)
    return (
        <Fragment>

            <Switch>
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

                        <Route path={sessionCtx.sessionUrl} exact>
                            <h1>Hello Session!</h1>
                        </Route>

                        <Route path="/dummySession-akiyama">
                            <h1>Akiyama's Session!</h1>
                        </Route>
                        <Route path="/dummySession-old-yu">
                            <h1>Old Yu's Session!</h1>
                        </Route>
                        <Route path="/dummySession-lpy">
                            <h1>LPY's Session!</h1>
                        </Route>

                    </AuthContextProvider>
                </SessionContextProvider>
            </Switch>
        </Fragment>
    )
}

export default App
