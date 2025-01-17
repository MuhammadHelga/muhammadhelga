import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Project from '../components/Project'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Project/>
        <Experience/>
        <Footer/>
        <BackToTop/>

    </>
  )
}

export default Home
