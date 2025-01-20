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
        <h3>
              About Me
            </h3>
            <p>
                I am an enthusiastic student and ready to contribute positively to the professional world. With an educational background in Information Technology, I have a deep understanding of technology as well as practical skills. I am committed to continuing to learn and develop my soft skills and hard skills, by bringing positive energy to every available opportunity.
              </p>
            <h4
            >Programming Language & Tools
            </h4>
            <div 
            className='skills'>
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
            </div>
        </div>
    </section>
  )
}

export default About
