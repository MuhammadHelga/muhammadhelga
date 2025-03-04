import React from 'react'
import profile from '../assets/photos.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className='header-jumbotron'>
            <img className='img-profile' src={profile} alt="" />
            <h3>Muhammad Helga Yudhi Miqailla</h3>
            <p>Undergraduate - Information Technology</p>
            <div className='socialMedia'>
            <a className='ig' href="https://www.instagram.com/muhelga_/"><FaInstagram/></a>
                <a className='github' href="https://github.com/MuhammadHelga"><FaGithub/></a>
                <a className='linkedin' href="https://www.linkedin.com/in/muhammad-helga-yudhi-miqailla-1133352b2/"><FaLinkedin/></a>
            </div>
            <div className='resume'>
                <a href="https://drive.google.com/file/d/1ohnOSeGPCv9Kl4798DeG5diIzlDQvI-g/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button>My Resume</button>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header
