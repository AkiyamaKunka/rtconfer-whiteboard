import classes from './PrimaryPage.module.css'
import React from 'react'
import bgImage1 from '../../assets/img/introductionImageShowcase/smbg1.jpg'
import bgImage2 from '../../assets/img/introductionImageShowcase/smbg2.jpg'
import bgImage3 from '../../assets/img/introductionImageShowcase/smbg3.jpg'
import bgImage4 from '../../assets/img/introductionImageShowcase/smbg4.jpg'
import bgImage5 from '../../assets/img/introductionImageShowcase/smbg5.jpg'
import bgImage6 from '../../assets/img/introductionImageShowcase/smbg6.jpg'
import bgImage7 from '../../assets/img/introductionImageShowcase/smbg7.jpg'
import bgImage8 from '../../assets/img/introductionImageShowcase/smbg8.jpg'

const IntroductionImageShowcase = () => {
    return (
        <>
            <section className={classes["meal-showcase"]}>
                <ul className={classes["clearfix"]}>
                    <li>
                        <figure>
                            <img src={bgImage1} alt="Korean bibimbap with egg and vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={bgImage2} alt="Simple Italian pizza with cherry tomatoes"/>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={bgImage3} alt="Chicken breast steak with vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={bgImage4} alt="Autumn pumpkin soup"/>
                        </figure>
                    </li>
                    <div className={classes.clearfix}></div>
                </ul>

                <ul className={classes["clearfix"]}>
                    <li>
                        <figure>
                            <img src={bgImage5} alt="Paleo beef steak with vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={bgImage6} alt="Healthy baguette with egg and vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={bgImage7} alt="Burger with cheddar and bacon"/>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={bgImage8} alt="Granola with cherries and strawberries"/>
                        </figure>
                    </li>
                </ul>
                <div className={classes.clearfix}></div>
            </section>
        </>
    )
}

export default IntroductionImageShowcase
