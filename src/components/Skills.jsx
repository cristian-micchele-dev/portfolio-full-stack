import React from 'react';

const skillsData = [
    {
        category: 'Lenguajes de Programación',
        skills: ['JavaScript', 'TypeScript']
    },
    {
        category: 'Frameworks y Librerías',
        skills: ['Express.js', 'NestJS', 'Socket.io', 'TypeORM', 'React']
    },
    {
        category: 'Bases de Datos',
        skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
        category: 'DevOps y Herramientas',
        skills: ['Git', 'GitHub', 'Postman', 'Swagger', 'Docker',  'Tailwind CSS']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <div className="skills-container">
                {skillsData.map((category, index) => (
                    <div className="skill-category" key={index}>
                        <h3>{category.category}</h3>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;