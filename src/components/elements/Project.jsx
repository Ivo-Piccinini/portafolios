import React, { useEffect, useRef, useState } from 'react';
import '../../styles/carousel.css';
import { projectData } from '../../data/projectData';
import githubLogo from '../../imgs/github-sign.png';
import webLogo from '../../imgs/web.png';
import { Link } from 'react-router-dom';

function Project() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
  
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex]);
  
    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? projectData.length - 1 : curr - 1;
            });
        } else {
            setCurrentIndex(curr => {
                const isLastSlide = currentIndex === projectData.length - 1;
                return isLastSlide ? 0 : curr + 1;
            });
        }
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="main-container">
            <div className="slider-container">
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                    
                <div className="up-container">
                    <p className='project-name'>{projectData[currentIndex].title}</p>    
                    <div className="project-buttons">
                        <Link to={projectData[currentIndex].link} target='_blank' aria-label={`Visit ${projectData[currentIndex].title} website`}>
                            <img src={webLogo} alt="Web Logo" /> 
                        </Link> 
                        <Link to={projectData[currentIndex].github} target='_blank' aria-label={`Visit ${projectData[currentIndex].title} GitHub`}>
                            <img src={githubLogo} alt="Github Logo" />
                        </Link>
                    </div>
                </div>
                <div className="container-images">
                    <ul ref={listRef}>
                        {projectData.map((item) => (
                            <li key={item.id}>
                                <img className='project-image' src={item.img} width={500} height={280} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="description">
                    <p className='description-text'>{projectData[currentIndex].description}</p>
                    <div className="principal-habilities">
                        <p className="title">Tecnologías utilizadas</p>
                        <div className="habilities">
                            {projectData[currentIndex].technologies.map((tech, index) => (
                                <div className="ability" key={index}>
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dots-container">
                    {projectData.map((_, idx) => (
                        <div 
                            key={idx}
                            className="dot-container-item "
                            onClick={() => goToSlide(idx)}>
                            <span  className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
