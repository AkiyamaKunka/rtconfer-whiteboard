import classes from './TechIntroduction.module.css'
import React from 'react'
import react from '../../assets/img/react.png'

const TechIntroductionReact = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes["step-box"]}>
                        <h3>React</h3>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-1']}`}>
                        <h2>React is a JAVASCRIPT library for building user interfaces, mostly for building UIs, and a
                            lot of people think of React as the V (view) of MVC. React began as an internal Facebook
                            project to build Instagram's website and opened source in May 2013. React has high
                            performance, very simple code logic, and more and more people have started to pay attention
                            and use it.
                            Characteristics of the React</h2>
                        <h2>1. Formula design −React adopts the declarative paradigm, which can easily describe
                            applications.</h2>
                        <h2>2. React minimizes interactions with the DOM by simulating the DOM.</h2>
                        <h2>3. Flexibility -- React works well with known libraries or frameworks.</h2>
                    </div>
                    <div className={classes['step-box-2']}>
                        <h2>4. JSX − JSX is an extension of JavaScript syntax. React development does not necessarily
                            use JSX, but we recommend it.</h2>
                        <h2>5. Components -- Components are built with React, which makes the code more easily reused
                            and can be well applied in the development of large projects.</h2>
                        <div className={classes["imgmid"]}>
                            <img src={react} alt="usage scene"/>
                        </div>
                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default TechIntroductionReact
