'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import header from '../styles/header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className={header.container}>
      <div className={header.logo}>
        <Image src={logo} alt="Logo" />
      </div>
      <button className={header['menu-toggle']} onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
      <ul className={`${header.menu} ${isMenuOpen ? header.active : ''}`}>
      <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#doctors">Doctors</a></li>
      </ul>
    </div>
  );
};

export default Header;
