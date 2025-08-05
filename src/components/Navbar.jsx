import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1>
                        <span className="logo-text">
                            <span className="logo-letter logo-letter-c">C</span>
                            <span className="logo-letter logo-letter-m">M</span>
                        </span>
                        <span className="logo-subtitle">Dev</span>
                    </h1>
                </div>
                <ul className={`navbar__links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="home" smooth={true} duration={500} className="navbar__link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="navbar__link" onClick={() => setIsMobileMenuOpen(false)}>Sobre Mí</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} className="navbar__link" onClick={() => setIsMobileMenuOpen(false)}>Habilidades</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="navbar__link" onClick={() => setIsMobileMenuOpen(false)}>Proyectos</Link></li>
                    <li><Link to="certificates" smooth={true} duration={500} className="navbar__link" onClick={() => setIsMobileMenuOpen(false)}>Certificados</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="navbar__link" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link></li>
                </ul>
                <div 
                    className={`navbar__burger ${isMobileMenuOpen ? 'toggle' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="navbar__burger-line"></div>
                    <div className="navbar__burger-line"></div>
                    <div className="navbar__burger-line"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;