import artesMarciales from '../assets/artesMarciales.png';
import dragonBallZ from '../assets/dRAGONBALLZ.png';
import WebSocket from '../assets/Socket.io.JPG';
import expenseTracker from "../assets/expense-tracker.JPG"
import magicQueen from "../assets/MagicQueen.png"
import Login from "../assets/Login2.JPG"
import SeñorDeLosAnillos from "../assets/SeñorDeLosAnillos.JPG"

const projectsData = [
    {
        id: 1,
        title: 'Api de Artes Marciales',
        description: 'Este proyecto utiliza fetch para consumir y mostrar datos desde mi propia API de artes marciales, incluyendo detalles como nombre, origen y filosofía de cada arte.',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        codeLink: 'https://github.com/Cristian-Backend/martialArts-Api-mongo',
        demoLink: 'https://artesmarcialesf.netlify.app/home',
        image: artesMarciales
    },
    {
        id: 2,
        title: 'Api Dragon ball Z con Nest',
        description: 'Api de dragon ball z con NestJs utilizando MONGODB y fronted básico para consumirlo.',
        techStack: ['Nest', 'MongoDB', 'HTML/CSS'],
        codeLink: 'https://github.com/Cristian-Backend/nest-api-dragonballz',
        demoLink: 'https://tubular-eclair-4fae91.netlify.app/',
        image: dragonBallZ
    },
    {
        id: 3,
        title: 'WebSocket',
        description: 'WebSocket con roles y autenticacion JWT con una base de datos typeORM robusta de Usuarios.',
        techStack: ['Nest', 'PostgreSQL', 'Socket.io', 'TypeORM'],
        codeLink: 'https://github.com/Cristian-Backend/tesloshop-nest',
        demoLink: '#',
        image: WebSocket
    }
];

const frontendProjectsData = [
    {
        id: 1,
        title: 'Expense Tracker - Control de Gastos',
        description: 'Aplicación React para gestionar ingresos y gastos con gráficos interactivos usando Victory. Incluye balance en tiempo real y categorización de transacciones.',
        techStack: ['React', 'Vite', 'Tailwind CSS'],
        codeLink: 'https://github.com/cristian-micchele-dev/expense-tracker-react',
        demoLink: 'https://expense-tracker-react-eosin-nine.vercel.app/',
        image: expenseTracker
    },
    {
        id: 2,
        title: 'Magic Queen - Landing Page',
        description: 'Landing page moderna con animaciones fluidas usando Framer Motion. Diseño responsive con Tailwind CSS.',
        techStack: ['React', 'Framer Motion', 'Tailwind CSS'],
        codeLink: 'https://github.com/cristian-micchele-dev/magic-queen-landing',
        demoLink: 'https://landing-animada.netlify.app/',
        image: magicQueen
    },
       {
        id: 3,
        title: 'Señor de los Anillos - Tierra Media',
        description: 'Este proyecto es una aplicación web desarrollada con React que explora el universo de El Señor de los Anillos. Permite al usuario navegar entre distintas páginas que presentan información sobre personajes, lugares icónicos y eventos relevantes de la Tierra Media',
        techStack: ['React', 'Framer Motion', 'CSS'],
        codeLink: 'https://github.com/cristian-micchele-dev/el-se-or-de-los-anillos-react',
        demoLink: 'https://el-se-or-de-los-anillos-react.vercel.app/',
        image: SeñorDeLosAnillos
    }
];

const fullstackProjectsData = [
    {
        id: 1,
        title: 'MERN Auth & Task Manager',
        description: 'Sistema completo de autenticación y gestión de tareas con JWT. Incluye registro, login, protección de rutas y CRUD completo.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        codeLink: 'https://github.com/cristian-micchele-dev/Auth-mern-task/',
        demoLink: 'https://crud-auth-frontend.onrender.com/',
        image: Login
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Proyectos</h2>
            
            <div className="projects-category">
                <h3 className="category-title">Backend Projects</h3>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        <i className="fab fa-github"></i> Código
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        <i className="fas fa-external-link-alt"></i> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-category">
                <h3 className="category-title">Frontend Projects</h3>
                <div className="projects-grid">
                    {frontendProjectsData.map(project => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        <i className="fab fa-github"></i> Código
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        <i className="fas fa-external-link-alt"></i> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-category">
                <h3 className="category-title">Full Stack Projects</h3>
                <div className="projects-grid">
                    {fullstackProjectsData.map(project => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        <i className="fab fa-github"></i> Código
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        <i className="fas fa-external-link-alt"></i> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;