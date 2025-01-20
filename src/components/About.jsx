import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { SiLaragon } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { motion } from 'framer-motion';

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <section id='about'>
        <div className='wrapper'>
        <motion.h3
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: scrollY > 100 ? 1 : 0,
                x: scrollY > 100 ? 0: -200,
              }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              animate={{
                opacity: scrollY > 100 ? 1 : 0,
                x: scrollY > 100 ? 0: 200,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              >
                I am an enthusiastic student and ready to contribute positively to the professional world. With an educational background in Information Technology, I have a deep understanding of technology as well as practical skills. I am committed to continuing to learn and develop my soft skills and hard skills, by bringing positive energy to every available opportunity.
              </motion.p>
            <motion.h4
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: scrollY > 400 ? 1 : 0,
                scale: scrollY > 400 ? 1 : 0.5,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >Programming Language & Tools
            </motion.h4>
            <motion.div 
            className='skills'
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: scrollY > 500 ? 1 : 0,
              y: scrollY > 500 ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
                <FaHtml5 className='html'/>
                <FaCss3Alt className='css'/>
                <IoLogoJavascript className='js'/>
                <SiPhp className='php'/>
                <FaJava className='java'/>
                <FaReact className='react'/>
                <SiKotlin className='kotlin'/>
                <FaPython className='python'/>
                <FaBootstrap className='bs'/>
                <SiMysql className='sql'/>
                <FaLaravel className='laravel'/>
                <SiAndroidstudio className='android'/>
                <VscVscode className='vsc'/>
                <FaFigma className='figma'/>
                <SiLaragon className='laragon' />
                <FaGit className='git'/>
            </motion.div>
        </div>
    </section>
  )
}

export default About
