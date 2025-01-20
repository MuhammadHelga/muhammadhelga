import React from 'react'
import '../styles/Footer.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <h3>Contact Me</h3>
        <div className='contact'>
        <div className='contact-item'>
            <MdEmail />
            <p>muhammadhelga41@gmail.com</p>
        </div>
        <div className='contact-item'>
            <FaWhatsapp />
            <p>082231528841</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
