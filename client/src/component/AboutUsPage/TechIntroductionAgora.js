import classes from './TechIntroduction.module.css'
import React from 'react'
import agora from '../../assets/img/agora.png'

const TechIntroductionAgora = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes["step-box"]}>
                        <h3>Agora</h3>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-1']}`}>
                        <h2>Agora.io provides a minimalist SDK that allows developers to access the SD-RTN™ real-time
                            virtual communication network for high-quality voice chat, video chat, and full interactive
                            live streaming in any App and website. They focus on the simple access SDK, which can
                            quickly achieve live streaming.</h2>
                        <h2>The Audio network SDK uses the new Lastmile strategy to significantly improve the
                            availability and smoothiness of audio and video streams in high-traffic and high-packet loss
                            network environments. On the audio side, the Sonnet SDK is used in many scenarios that
                            emphasize sound quality. Also optimized the audio strategy, echo cancellation algorithm,
                            combining the whole band sampling music coding with, can provide users with high
                        </h2>
                    </div>
                    <div className={classes['step-box-2']}>
                        <h2>
                            fidelity sound experience in the aspect of function provides the multi-channel support, can
                            realize real-time interactive sound more complicated network Agora SDK multi-channel
                            function can be achieved in a single process, not only reduce the complexity of integration,
                            It also reduces the consumption of system resources.</h2>
                        <div className={classes["imglong"]}>
                            <img src={agora} alt="usage scene"/>
                        </div>
                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default TechIntroductionAgora
