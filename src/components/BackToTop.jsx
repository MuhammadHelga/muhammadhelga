import React, { useState, useEffect } from 'react';
import '../styles/BackToTop.css';
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasi scroll halus
    });
  };

  // Fungsi untuk mengatur visibilitas tombol berdasarkan posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <button onClick={scrollToTop} className="back-to-top">
            <FaArrowUp className='icon'/>
        </button>
      )}
    </div>
  );
}

export default BackToTop;
