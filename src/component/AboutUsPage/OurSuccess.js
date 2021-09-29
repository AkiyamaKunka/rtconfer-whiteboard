import classes from './OurSuccess.module.css'
import React from 'react'
import clients from '../../assets/img/clients.jpeg'

const OurSuccess = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes['step-box-1']}>
                        <img src={clients} alt="usage scene"/>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-2']}`}>
                        <div className={classes["row"]}>
                            <h2>Our Success<br/>is measured by your<br/>success</h2>
                        </div>
                        <h3>We make your business better because you are at the heart of what we do.</h3>
                        <h3>“ A customer is the most important visitor on our premises, they are not dependent on us. We
                            are dependent on them. They are not an interruption in our work. They are the purpose of it.
                            They are not an outsider in our business. They are part of it. We are not doing them a
                            favour by serving them. They are doing us a favour by giving us an opportunity to do so.
                            ”</h3>
                        <h3>– Mahatma Gandhi</h3>
                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default OurSuccess
