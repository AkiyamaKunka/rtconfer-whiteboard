import classes from './PrimaryPage.module.css'
import React from 'react'
import { ChatbubblesOutline } from 'react-ionicons'
import { PeopleOutline } from 'react-ionicons'
import { CreateOutline } from 'react-ionicons'
import { DesktopOutline } from 'react-ionicons'

const IntroductionSection = () => {
    return (
        <>
            <section className={classes["section-features"]}>
                <div className={classes["row"]}>
                    <h2> Rich Media + Online = Efficient Meetings</h2>
                    <p className={classes["long-copy"]}>
                        Hello, We’re Lucyriver’s Ice Tea, your new premium rich-media online conference service.
                        We know cooperative business is important to you, even at home.
                        So let’s take care of that,
                        and enjoy your meeting like “face to face”!
                    </p>
                </div>
                <div className={classes["row"]}>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <ChatbubblesOutline
                            color={'#3498db'}
                            height="65px"
                            width="65px"
                        />
                        <h3 className={classes["sub-slogan-title"]}>
                            Real-Time Collaboration
                        </h3>
                        <p className={classes["sub-long-copy"]}>

                            we provides an engaging, intuitive,
                            in-person collaboration experience with multiple options for real-time or asynchronous
                            teamwork on an online whiteboard.
                        </p>
                    </div>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <DesktopOutline
                            color={'#3498db'}
                            height="65px"
                            width="65px"
                        />
                        <h3 className={classes["sub-slogan-title"]}>
                            Meetings + Workshops
                        </h3>
                        <p className={classes["sub-long-copy"]}>
                            Whether your teams are colocated, distributed, or fully remote,
                            Run productive, engaging online remote meetings and workshops with your team.
                        </p>
                    </div>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <CreateOutline
                            color={'#3498db'}
                            height="70px"
                            width="70px"
                        />
                        <h3 className={classes["sub-slogan-title"]}>
                            Rich-Media canvas
                        </h3>
                        <p className={classes["sub-long-copy"]}>
                            Our Rich-Media web canvas enables you to work the way you want to.
                            Unleash your creativity,
                            plan projects from all angles, and create centralized hubs of information to keep everyone
                            in the loop.
                        </p>
                    </div>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <PeopleOutline
                            color={'#3498db'}
                            height="70px"
                            width="70px"
                        />
                        <h3 className={classes["sub-slogan-title"]}>
                            Team & Sessions
                        </h3>
                        <p className={classes["sub-long-copy"]}>
                            No matter when, you can easily create teams and manage them.
                            View your historical meetings and resume them at any time.
                            It's time to be a leader, make team productive, collaborative and efficient.
                        </p>
                    </div>
                </div>
            </section>
            <div className={classes.clearfix}></div>
        </>
    )
}

export default IntroductionSection
