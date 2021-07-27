import classes from './PrimaryPage.module.css'
import logoImage from "../../assets/img/LogoNew.png"
import {Link} from "react-router-dom";
import IntroductionSection from "./IntroductionSection";
import IntroductionImageShowcase from './IntroductionImageShowcase'
import IntroductionUsageSection from "./IntroductionUsageSection";
import React from 'react'
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context/auth-context";

const PrimaryPage = () => {
    const authCtx = useContext(AuthContext)
    return (
        <>
            <header>
                <nav>
                    <div className={classes.row}>
                        <img src={logoImage} alt="Kunka Food Logo" className={classes.logo}/>
                        <ul className={classes['main-nav']}>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">About Us</a></li>
                            { !authCtx.isLogin && <li><Link to={'/login'}>Login</Link></li>}
                            { !authCtx.isLogin && <li><Link to={'/sign-up'}>Sign Up</Link></li>}
                            { authCtx.isLogin && <li><Link to={'/welcome'} onClick={() => {authCtx.logout()}}>Log Out</Link></li>}
                            { authCtx.isLogin && <li><Link to={`/user-profile-${localStorage.email}`}>User Profile</Link></li>}
                        </ul>
                    </div>
                </nav>
                <div className={classes['hero-text-box']}>
                    {/*<h1>Goodbye messing around. <br/> Hello Efficient office.</h1>*/}
                    <h1> Online collaborative platform <br/>
                        Bring teams together, Anywhere.</h1>
                    <br/>
                    <a className={`${classes['btn-full']} ${classes.btn}`} href="#">Try It Out!</a>
                    <a className={`${classes['btn-ghost']} ${classes.btn}`} href="#">Show me more</a>
                </div>

            </header>
            <IntroductionSection/>
            <br></br><br></br>
            <IntroductionImageShowcase/>
            <IntroductionUsageSection/>

        </>
    )
}

export default PrimaryPage