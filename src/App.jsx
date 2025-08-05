import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';

const App = () => {
    const [modalData, setModalData] = useState({ isOpen: false, imgSrc: '', caption: '' });

    const openModal = (imgSrc, caption) => {
        setModalData({ isOpen: true, imgSrc, caption });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects openModal={openModal} />
            <Certificates openModal={openModal} />
            <Contact />
            <Footer />
            {modalData.isOpen && (
                <CertificateModal
                    imgSrc={modalData.imgSrc}
                    caption={modalData.caption}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default App;