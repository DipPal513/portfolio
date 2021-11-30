import React from 'react'
import Banner from './Banner'
import Blogs from './Blogs/Blogs'
import Contact from './Contact'
import Header from './Header'
import Projects from './Projects/Projects'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
