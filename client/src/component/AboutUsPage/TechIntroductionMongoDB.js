import classes from './TechIntroduction.module.css'
import React from 'react'
import mongo from '../../assets/img/mongo.png'

const TechIntroductionMongoDB = () => {
    return (
        <>
            <section className={classes["section-steps"]}>
                <div>
                    <div className={classes["step-box"]}>
                        <h3>MongoDB</h3>
                    </div>
                    <div className={`${classes['col']} ${classes['step-box-1']}`}>
                        <h2>
                            MongoDB is a database based on distributed file storage, written by C++ language. It is
                            designed to provide a scalable, high-performance data storage solution for WEB applications.
                            The most important feature is that it supports a very powerful query language, which has a
                            syntax somewhat similar to object-oriented query languages. It can achieve almost most of
                            the functions similar to a relational database single table query, and also supports
                            indexing of data.
                        </h2>
                        <h2>
                            MongoDB is a product between a relational database and a non-relational database.The
                            non-relational database has the most
                        </h2>
                    </div>
                    <div className={classes['step-box-2']}>
                        <h2>
                            abundant functions and is the most similar to a relational database. The data structure it
                            supports is very loose, in the JSON-like BSON format, so it can store more complex data
                            types.
                        </h2>
                        <div className={classes["imgmid"]}>
                            <img src={mongo} alt="usage scene"/>
                        </div>

                    </div>
                </div>
                <div className={classes.clearfix}/>
            </section>
        </>
    )
}

export default TechIntroductionMongoDB
