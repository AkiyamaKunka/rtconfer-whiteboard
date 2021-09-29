import classes from './MainTechSupport.module.css'
import React from 'react'
import tech from '../../assets/img/tech.png'

const MainTechSupport = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes['step-box-1']}>
                        <img src={tech} alt="usage scene"/>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-2']}`}>
                        <div className={classes["row"]}>
                            <h2>Our Technology Support</h2>
                        </div>
                        <h3>Our technology selection is divided into five parts.</h3>
                        <h3>We chose Docker for the configuration of the virtual environment and decided that our
                            primary programming language was JavaScript. We choose React and Redux as our frameworks on
                            the front end and Node.js as our framework on the back end. Finally, we will use MongoDB to
                            record the received data, use SharedPen to achieve co-editing, and use Agora to complete
                            online voice chat. interruption in our work. They are the purpose of it.our by serving them.
                            They are doing us a favour by giving us an opportunity to do so. ”</h3>
                        <h3>The following is a brief introduction to each of these techniques.</h3>
                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default MainTechSupport
