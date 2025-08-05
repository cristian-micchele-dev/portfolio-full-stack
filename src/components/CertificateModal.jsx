import React from 'react';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
    if (!isOpen) return null;

    return (
        <div className="certificate-modal">
            <span className="close-modal" onClick={onClose}>&times;</span>
            <img className="certificate-modal-content" src={certificate.imgSrc} alt={certificate.caption} />
            <div id="certificateModalCaption">{certificate.caption}</div>
        </div>
    );
};

export default CertificateModal;