import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLanguage } from '../context/languageContext';
import '../assets/styles/Header.css';

const Header = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
        <Navbar.Brand href="/">{t('homepage_nav')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">{t('aboutnav')}</Nav.Link>
            <Nav.Link href="/projects">{t('projects_nav')}</Nav.Link>
            <Nav.Link href="/contact">{t('contact_nav')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => changeLanguage('en')}>ENG</Nav.Link>
            <Nav.Link onClick={() => changeLanguage('pl')}>PL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
