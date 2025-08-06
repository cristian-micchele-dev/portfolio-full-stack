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

    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleModalClose = (e) => {
        // Cerrar modal si se hace clic en el overlay
        if (e.target.classList.contains('mobile-menu-modal')) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
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
                    <ul className="navbar__links">
                        <li><Link to="home" smooth={true} duration={500} className="navbar__link">Inicio</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className="navbar__link">Sobre Mí</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} className="navbar__link">Habilidades</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className="navbar__link">Proyectos</Link></li>
                        <li><Link to="certificates" smooth={true} duration={500} className="navbar__link">Certificados</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className="navbar__link">Contacto</Link></li>
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

            {/* Modal del menú móvil */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-modal" onClick={handleModalClose}>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-header">
                            <h2>Menú</h2>
                            <button 
                                className="mobile-menu-close"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <nav className="mobile-menu-nav">
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                className="mobile-menu-link" 
                                onClick={handleLinkClick}
                            >
                                🏠 Inicio
                            </Link>
                            <Link 
                                to="about" 
                                smooth={true} 
                                duration={500} 
                                className="mobile-menu-link" 
                                onClick={handleLinkClick}
                            >
                                👨‍💻 Sobre Mí
                            </Link>
                            <Link 
                                to="skills" 
                                smooth={true} 
                                duration={500} 
                                className="mobile-menu-link" 
                                onClick={handleLinkClick}
                            >
                                🚀 Habilidades
                            </Link>
                            <Link 
                                to="projects" 
                                smooth={true} 
                                duration={500} 
                                className="mobile-menu-link" 
                                onClick={handleLinkClick}
                            >
                                💼 Proyectos
                            </Link>
                            <Link 
                                to="certificates" 
                                smooth={true} 
                                duration={500} 
                                className="mobile-menu-link" 
                                onClick={handleLinkClick}
                            >
                                🏆 Certificados
                            </Link>
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                className="mobile-menu-link" 
                                onClick={handleLinkClick}
                            >
                                📧 Contacto
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;