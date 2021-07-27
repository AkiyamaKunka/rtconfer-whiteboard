import React from "react"
import PrimaryPage from "./component/PrimaryPage/PrimaryPage";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import {Fragment, useContext} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {ChakraFooter} from "./component/PrimaryPage/FooterWithTwoColumns/App";
import SignUp from "./component/SignUpPage/SignUp";
import WithSubnavigation from "./component/SignUpPage/NavigationBar";
import AuthContextProvider from "./store/auth-context/auth-context";
import LoginModule from "./component/LogInPage/LoginWithCentredForm/LoginModule";
import UserMainPage from "./component/UserProfile/UserMainPage";
import {AuthContext} from "./store/auth-context/auth-context";


function App() {


    return (
        <Fragment>
            <Switch>
                <AuthContextProvider>
                    <Route path='*' exact>
                        <Redirect to='/welcome'/>
                    </Route>
                    <Route path="/welcome" exact>
                        <PrimaryPage/>
                        <ChakraProvider>
                            <ChakraFooter/>
                        </ChakraProvider>
                    </Route>

                    <Route path="/sign-up" >
                        <ChakraProvider>
                            <WithSubnavigation/>
                            <SignUp/>
                        </ChakraProvider>
                    </Route>

                    <Route path="/login" >
                        <ChakraProvider>
                            <LoginModule/>
                        </ChakraProvider>
                    </Route>
                    <Route path={`/user-profile-${localStorage.email}`}>
                        <ChakraProvider>
                            <UserMainPage/>
                        </ChakraProvider>
                    </Route>
                </AuthContextProvider>
            </Switch>
        </Fragment>
    )
}

export default App;
