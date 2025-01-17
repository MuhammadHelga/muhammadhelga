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
            <h5>muhammadhelga41@gmail.com</h5>
        </div>
        <div className='contact-item'>
            <FaWhatsapp />
            <h5>082231528841</h5>
        </div>
        </div>
    </footer>
  )
}

export default Footer
