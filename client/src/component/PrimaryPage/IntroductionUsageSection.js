import classes from './PrimaryPage.module.css'
import React from 'react'
import usageImage from '../../assets/img/usage1.jpg'
import fakeDownloadImage1 from '../../assets/img/download-app.svg'
import fakeDownloadImage2 from '../../assets/img/download-app-android.png'

const IntroductionUsageSection = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div className={classes["row"]}>
                    <h2>
                        How it works - Simple as 1, 2, 3
                    </h2>
                </div>
                <div className={classes["row"]}>
                    <div className={classes['work-step-outer']}>
                        <div className={`${classes['col']}  ${classes['step-box-1']}`}>
                            <img src={usageImage} alt="usage scene" className={classes["app-screen"]}/>
                        </div>
                        <div className={`${classes['col']} ${classes['step-box-2']}`}>
                            <div className={classes["work-step"]}>
                                <div>1</div>
                                <p>
                                    Register your account / Login just in our website.
                                </p>
                            </div>
                            <div className={classes["work-step"]}>
                                <div>2</div>
                                <p>
                                    Create your own team or simply join an existing team.
                                </p>
                            </div>
                            <div className={classes["work-step"]}>
                                <div>3</div>
                                <p>
                                    Create a meeting with your teammates, enjoy real-time collaboration.
                                </p>
                            </div>
                            {/*<div>*/}
                            {/*    <a href="#" className={classes["btn-app"]}>*/}
                            {/*        <img src={fakeDownloadImage1} alt="download-app button"/>*/}
                            {/*    </a>*/}
                            {/*    <a href="#" className={classes["btn-app"]}>*/}
                            {/*        <img src={fakeDownloadImage2}*/}
                            {/*             alt="download-app android button"/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className={classes.clearfix}></div>
            </section>
        </>
    )
}

export default IntroductionUsageSection
