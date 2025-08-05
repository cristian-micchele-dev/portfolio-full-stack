import React, { useState } from 'react';
import CertificateModal from './CertificateModal';

import nestCert from '../assets/Nest.jpg';
import htmlcssCert from '../assets/CertificadoP-htmlcss.jpg';
import dockerCert from '../assets/Fundamentos-Docker.jpg';

const certificates = [
    {
        imgSrc: nestCert,
        title: 'Nest: Desarrollo backend escalable con Node',
        provider: 'Udemy',
    },
    {
        imgSrc: htmlcssCert,
        title: 'Curso practico de Html y Css',
        provider: 'Platzi',
    },
    {
        imgSrc: dockerCert,
        title: 'Curso de Docker: Fundamentos',
        provider: 'Platzi',
    },
    // Add more certificates as needed
];

const Certificates = () => {
    const [modalData, setModalData] = useState(null);

    const openModal = (certificate) => {
        setModalData(certificate);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <section id="certificates" className="certificates">
            <h2 className="section-title">Certificados</h2>
            <div className="certificates__gallery">
                {certificates.map((certificate, index) => (
                    <div className="certificates__item" key={index}>
                        <img
                            src={certificate.imgSrc}
                            alt={certificate.title}
                            onClick={() => openModal(certificate)}
                        />
                        <div className="certificate-overlay">
                            <h3>{certificate.title}</h3>
                            <p>{certificate.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
            {modalData && (
                <CertificateModal
                    imgSrc={modalData.imgSrc}
                    title={modalData.title}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default Certificates;