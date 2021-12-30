import React from 'react'
import Footer from '../Footer'
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
            <Footer />
        </>
    )
}

export default Home
