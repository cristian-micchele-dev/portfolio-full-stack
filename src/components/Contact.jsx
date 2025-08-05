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