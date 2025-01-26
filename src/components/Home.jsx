import '../styles/home.css';
import reactLogo from '../imgs/react.png';
import javascriptLogo from '../imgs/javascript.png';
import pythonLogo from '../imgs/python.png';
import djangoLogo from '../imgs/django.png';
import Experience from './elements/Experience';
import experienceData from '../data/experienceData';
import Project from './elements/Project';

function Home() {
  
  return (
    <main>
      <div id="home" className='introduction section'>
        <h1 className='name'> Ivo Piccinini</h1>
        <div className="text">Fullstack Developer</div>
      </div>
      
      <div id='about-me' className="about-me section">
        <p className='about-me-text hi'>¡Hola!</p>
        <p className='about-me-text'>Soy Ivo. Soy un desarrollador web full-stack y estudiante de la tecnicatura en programación en la UTN de Mar del Plata. Busco constantemente nuevos desafíos y oportunidades para crecer.  </p>
        <div className="principal-habilities">
          <p className="title">Habilidades principales</p>
          <div className="habilities">
            <div className="ability">
              <img src={reactLogo} alt="" />
              <p>React</p>
            </div>
            <div className="ability">
              <img src={javascriptLogo} alt="" />
              <p>Javascript</p>
            </div>
            <div className="ability">
              <img src={pythonLogo} alt="" />
              <p>Python</p>
            </div>
            <div className="ability">
              <img src={djangoLogo} alt="" />
              <p>Django</p>
            </div>
          </div>
        </div>
      </div>

      <div id='experience' className="experience section">
        <p className='experience-title'>Experiencia laboral</p>
        {experienceData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>

      <div id='projects' className="projects">
        <p className='project-title'>Proyectos</p>
        <Project />
      </div>
    </main>
  );
}

export default Home;
