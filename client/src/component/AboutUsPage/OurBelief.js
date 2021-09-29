import classes from '../PrimaryPage/PrimaryPage.module.css'
import React from 'react'
import pic_1 from '../../assets/img/1.png'
import pic_2 from '../../assets/img/2.png'
import pic_3 from '../../assets/img/3.png'
import pic_4 from '../../assets/img/4.png'

const OurBelief = () => {
    return (
        <>
            <section className={classes["section-features"]}>
                <h2>Our shared beliefs</h2>
                <div className={classes["row"]}>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <img src={pic_4} alt="pic_4"/>
                        <h3/>
                        <h3/>
                        <h3 className={classes["sub-slogan-title"]}>
                            Passion for top-quality
                        </h3>
                        <p className={classes["sub-long-copy"]}>
                            A passion for top-quality is the key driver to our success. Quality is the key word that
                            runs through our organisation. We strive to exceed the expectations of our clients.
                        </p>
                    </div>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <img src={pic_3} alt="pic_3"/>
                        <h3/>
                        <h3/>
                        <h3 className={classes["sub-slogan-title"]}>
                            Belief in <br/>
                            innovation
                        </h3>
                        <p className={classes["sub-long-copy"]}>

                            we provides an engaging, intuitive,
                            in-person collaboration experience with multiple options for real-time or asynchronous
                            teamwork on an online whiteboard.
                        </p>
                    </div>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <div className={classes['srctype']}>
                            <img src={pic_2} alt="pic_2"/>
                        </div>
                        <h3/>
                        <h3/>
                        <h3 className={classes["sub-slogan-title"]}>
                            Continuous learning
                        </h3>
                        <p className={classes["sub-long-copy"]}>
                            We are committed to continuous learning. We actively seek feedback from those we serve and
                            use it to eliminate deficit, maximise value, provide better service, and enhance quality.
                        </p>
                    </div>
                    <div className={`${classes['sub-slogan']} ${classes['box']}`}>
                        <img src={pic_1} alt="pic_1"/>
                        <h3/>
                        <h3/>
                        <h3 className={classes["sub-slogan-title"]}>
                            Uphold Ethics and Integrity
                        </h3>
                        <p className={classes["sub-long-copy"]}>
                            We uphold honesty and integrity in everything that we do. We aspire to be simple,
                            transparent and empathetic. We maintain high standards of governance, personal integrity,
                            confidentiality and ethical behavior.
                        </p>
                    </div>
                </div>
            </section>
            <div className={classes.clearfix}/>
            <br/>
            <br/>
        </>
    )
}

export default OurBelief;
