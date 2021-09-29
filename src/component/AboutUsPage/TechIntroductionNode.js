import classes from './TechIntroduction.module.css'
import React from 'react'
import node from '../../assets/img/node.png'

const TechIntroductionNode = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes["step-box"]}>
                        <h3>Node.js</h3>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-1']}`}>
                        <h2>Node.js is a Chrome V8-powered JavaScript runtime environment that uses an event-driven,
                            non-blocking I/O model to run JavaScript on the server side of the development platform.
                            JavaScript is an event-driven language, and Node takes advantage of this to write a highly
                            scalable server. Node uses an architecture called an "event loop" that makes it easy and
                            safe to write scalable servers.</h2>
                        <h2>1. Asynchronous I/O</h2>
                        <h2>For example, the asynchronous I/O depends on the time spent reading the slowest file, while
                            the synchronous I/O time is the sum of the time spent reading the two files. The advantages
                            of asynchrony are obvious here.</h2>
                        <h2>2. events</h2>
                        <h2>Node supports event loops using a series of "non-blocking" libraries, essentially providing
                            interfaces to resources such as file systems and databases. When sending a request to the
                            file system, there is no need to wait for the disk (to address and retrieve the file) and
                            the non-blocking interface informs the Node when the disk is ready. </h2>
                    </div>
                    <div className={classes['step-box-2']}>
                        <h2>
                            Node uses Module modules to divide different functions to simplify application development.
                            Each Node library contains a rich variety of functions. Node.js enters the event loop
                            directly after executing the input script. When there are no more callbacks to execute,
                            Node.js exits the event loop. The event loop is hidden from the user.
                        </h2>
                        <h2>3. Single threading</h2>
                        <h2>
                            Node maintains the single-threaded nature of JavaScript in the browser. And JavaScript
                            cannot share any state with other threads in Node. The biggest benefit of single threading
                            is that you don't have to worry about synchronizing state as much as multithreaded
                            programming does. There are no deadlocks and no performance overhead associated with thread
                            context exchange.
                        </h2>
                        <div className={classes["imgmid"]}>
                            <img src={node} alt="usage scene"/>
                        </div>

                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default TechIntroductionNode
