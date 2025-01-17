import React from 'react'
import '../styles/Footer.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <h3>Contact Me</h3>
        <div className='contact'>
            <MdEmail/>
            <h5>muhammadhelga41@gmail.com</h5>
            <FaWhatsapp/>
            <h5>082231528841</h5>
        </div>
    </footer>
  )
}

export default Footer
