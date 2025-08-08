import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formMessage, setFormMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // Credenciales reales de EmailJS
            const serviceId = 'service_s2kwuqq';
            const templateId = 'template_nxqif8c';
            const publicKey = '6MTF9nrROGBRIWp8e';
            
            // Preparar datos para EmailJS
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                date: new Date().toLocaleString('es-AR')
            };
            
            // Enviar email real con EmailJS
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            
            console.log('✅ Email enviado exitosamente:', result);
            setFormMessage('✅ ¡Mensaje enviado exitosamente! Te responderé pronto.');
            
            // Limpiar formulario
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
        } catch (error) {
            console.error('Error en el formulario:', error);
            setFormMessage('❌ Error al enviar el mensaje. Inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
            // El mensaje desaparece después de 5 segundos
            setTimeout(() => setFormMessage(''), 5000);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="contact__container">
                <h2 className="section-title">Contacto</h2>
                
                <div className="contact__content">
                    {/* Columna Izquierda - Información de Contacto */}
                    <div className="contact__info">
                        <h3 className="contact__info-title">Información de Contacto</h3>
                        <p className="contact__info-subtitle">¿Tienes algún proyecto en mente? ¡Hablemos!</p>
                        
                        <div className="contact__item">
                            <i className="fas fa-envelope"></i>
                            <div className="contact__item-content">
                                <h4>Email</h4>
                                <p>c.micchele@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact__item">
                            <i className="fas fa-phone"></i>
                            <div className="contact__item-content">
                                <h4>Teléfono</h4>
                                <p>+54 3402 501127</p>
                            </div>
                        </div>
                        
                        <div className="contact__item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="contact__item-content">
                                <h4>Ubicación</h4>
                                <p>Arroyo Seco, Santa Fe, Argentina</p>
                            </div>
                        </div>

                        {/* Nueva sección de redes sociales - LOGOS PEQUEÑOS */}
                        <div className="contact__social">
                            <h4 className="contact__social-title">Sígueme en:</h4>
                            <div className="contact__social-links">
                                <a 
                                    href="https://www.linkedin.com/in/cristian-micchele-1445a92b5/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="contact__social-logo linkedin"
                                    aria-label="LinkedIn"
                                    title="Visita mi perfil de LinkedIn"
                                >
                                    <svg viewBox="0 0 24 24" className="social-icon">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                
                                <a 
                                    href="https://github.com/cristian-micchele-dev" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="contact__social-logo github"
                                    aria-label="GitHub"
                                    title="Visita mi perfil de GitHub"
                                >
                                    <svg viewBox="0 0 24 24" className="social-icon">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Columna Derecha - Formulario */}
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Tu Nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />
                        </div>
                        
                        <div className="contact__form-group">
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Tu Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />
                        </div>
                        
                        <div className="contact__form-group">
                            <input
                                type="text"
                                name="subject"
                                className="contact__form-input"
                                placeholder="Asunto"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />
                        </div>
                        
                        <div className="contact__form-group">
                            <textarea
                                name="message"
                                className="contact__form-textarea"
                                placeholder="Tu Mensaje"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="contact__form-submit" disabled={isLoading}>
                            {isLoading ? '📤 Enviando...' : '📧 Enviar Mensaje'}
                        </button>
                        
                        {formMessage && (
                            <div className={`contact__form-message ${formMessage.includes('✅') ? 'success' : 'error'}`}>
                                {formMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;