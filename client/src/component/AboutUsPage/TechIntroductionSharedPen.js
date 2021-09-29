import classes from './TechIntroduction.module.css'
import React from 'react'
import sharedpen from '../../assets/img/sharedpen.png'

const TechIntroductionSharedPen = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes["step-box"]}>
                        <h3>SharedPen</h3>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-1']}`}>
                        <h2>
                            SharedPen is a WYSIWYG editor based on web. In the ot.js library, use CodeMirror as the text
                            editor. CodeMirror is an excellent editor, mostly used for code editors The CodeMirror
                            editor has a rich and friendly
                        </h2>
                        <h2>
                            API:
                        </h2>
                        <h2>The coordinate system</h2>
                        <h2>1. CodeMirror unit to behavior, by which characters (line, ch) how many rows can be accurate
                            for each character position pos, at the same time, every character has a global index index,
                            Two helper methods, doc.posfromindex and doc.IndexFrompos, can be used to convert them</h2>
                        <h2>3. Flexibility -- React works well with known libraries or frameworks.</h2>
                    </div>
                    <div className={classes['step-box-2']}>
                        <h2>4. JSX − JSX is an extension of JavaScript syntax. React development does not necessarily
                            use JSX, but we recommend it.</h2>
                        <h2>5. Components -- Components are built with React, which makes the code more easily reused
                            and can be well applied in the development of large projects.</h2>
                        <div className={classes["imglong"]}>
                            <img src={sharedpen} alt="usage scene"/>
                        </div>
                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default TechIntroductionSharedPen
