import React from 'react';
import perfil from '../assets/perfil.png';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="section-title">Sobre Mí</h2>
            <div className="about__content">
                <div className="about__image">
                    <img src={perfil} alt="Foto de Perfil" />
                </div>
                <div className="about__text">
                    <p>¡Hola! Soy Cristian, un desarrollador Full Stack especializado en Backend con una pasión genuina por construir soluciones tecnológicas robustas y escalables. Mi expertise se centra en el ecosistema de JavaScript del lado del servidor, dominando tecnologías como Node.js, Express, NestJS, TypeORM, junto con bases de datos como MongoDB y MySQL.</p>
                    <p>Complemento estas habilidades con conocimientos sólidos en frontend utilizando React y Tailwind CSS, lo que me permite desarrollar aplicaciones completas con una visión integral del producto.</p>
                    <p>Durante mi año de experiencia enfocado en proyectos personales intensivos, he evolucionado desde crear APIs simples hasta desarrollar ecosistemas completos de microservicios y sistemas de gestión empresarial. Mi filosofía de desarrollo se basa en código limpio, arquitecturas mantenibles y la implementación constante de las mejores prácticas de la industria.</p>
                    <div className="about__cta">
                        <a href="https://www.canva.com/design/DAGkVDErMNQ/4pxhszeXa6yLDu8Tw1D3Pw/view?utm_content=DAGkVDErMNQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe5101a707" className="btn" download>Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;