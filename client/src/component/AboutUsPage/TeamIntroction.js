import classes from './TeamIntroction.module.css'
import React from 'react'
import { Button } from '@chakra-ui/react'

const IntroductionSection = () => {
    return (
        <>
            <section className={classes["section-features"]}>
                <div className={classes["row"]}>
                    <h2> About RTConfer</h2>
                    <p className={classes["left-copy"]}>
                        RTConference project started on July 19, 2021. After three days of team formation and technology
                        selection, and one week of preliminary technology learning and training, we have formed a united
                        and harmonious team with six members. We are determined to provide a more high-quality and
                        efficient experience for your online team work, and assist you to complete all kinds of work
                        smoothly.
                    </p>
                </div>
                <div className={classes["row"]}>
                    <Button
                        display={{md: 'inline-flex'}}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'blue.500'}
                        _hover={{
                            bg: 'blue.300',
                        }}
                    >
                        <h1>I want to register!</h1>
                    </Button>
                </div>
            </section>
        </>
    )
}

export default IntroductionSection
