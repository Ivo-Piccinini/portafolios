import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import logo from '../imgs/logo.png';
import useFunctions from '../hooks/useFunctions';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { scrollToTop, scrollToElement } = useFunctions();
  const [divActual, setDivActual] = useState('');

  
    const detectarDivVisible = () => {
      const divs = ['home', 'about-me', 'experience', 'projects'];
      const alturaScroll = window.scrollY;
      let divVisible = '';
  
      divs.forEach(id => {
        const div = document.getElementById(id);
        if (div) {
          const rect = div.getBoundingClientRect();
          const divTop = rect.top + alturaScroll;
          const divBottom = divTop + rect.height;
  
          // Verifica si el div está visible
          if (divTop >= 0 && divBottom <= (window.innerHeight + alturaScroll)) {
            divVisible = id; // Guarda el div visible
          }
        }
      });
  
      // Solo actualiza el estado si el div visible ha cambiado
      if (divVisible !== divActual) {
        setDivActual(divVisible);
      }
    };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav>
      <div className='logo-container'>
        <img src={logo} alt="Logo" onClick={scrollToTop} />
      </div>
      <div className='links-container' ref={menuRef}>
        <label className="hamburger">
          <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <button className={`value ${divActual === 'home' ? 'active' : ''}`} onClick={() => scrollToElement('home')}>Home</button>
          <button className={`value ${divActual === 'about-me' ? 'active' : ''}`} onClick={() => scrollToElement('about-me')}>Acerca de mí</button>
          <button className={`value ${divActual === 'experience' ? 'active' : ''}`} onClick={() => scrollToElement('experience')}>Experiencia</button>
          <button className={`value ${divActual === 'projects' ? 'active' : ''}`} onClick={() => scrollToElement('projects')}>Proyectos</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
