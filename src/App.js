import React from "react"
import PrimaryPage from "./component/PrimaryPage/PrimaryPage";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Fragment} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {ChakraFooter} from "./component/PrimaryPage/FooterWithTwoColumns/App";
import SignUp from "./component/SignUpPage/SignUp";
import WithSubnavigation from "./component/SignUpPage/NavigationBar";
import AuthContextProvider from "./store/auth-context/auth-context";
import LoginModule from "./component/LogInPage/LoginWithCentredForm/LoginModule";

function App() {
    return (
        <Fragment>
            <AuthContextProvider>
                <Route path="/welcome">
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

                {/*<Route path="/user-profile">*/}
                {/*    <ChakraProvider>*/}
                {/*        <WithSubnavigation/>*/}
                {/*        <SignUp/>*/}
                {/*    </ChakraProvider>*/}
                {/*</Route>*/}
            </AuthContextProvider>
        </Fragment>
    )
}

export default App;
