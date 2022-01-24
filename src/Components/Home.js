import React, { Fragment } from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Education from './Education'
import Header from './Header'
import Project from './Project'
import Skill from './Skill'

const Home = () => {
    return (
        <Fragment>
             <Header />
            <AboutMe />
            <Education />
            <Skill />
            <Project />
            <Contact />
        </Fragment>
    )
}

export default Home
