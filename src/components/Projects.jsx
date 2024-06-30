import React from 'react';
import '../styles/Projects.css';
import todo from '../assets/project/todo.png';
import calculator from '../assets/project/calculator.png';
import task from '../assets/project/task.png';
import phantom from '../assets/project/phantomIntegration.png';
import {ReactComponent as Github} from '../assets/Skill/icons8-github.svg';
const Projects = () => {
    return (
        <div className='projects'>
           <div className='project'>
                <img className='projectPic' src={todo} alt='todo' />
                <div className="projectDetails">
                    <h3>Todo App</h3>
                    <p>This project is a simple Todo List application built with React.js, Redux, and vanilla CSS, bootstrapped with Vite. The application allows users to add, toggle, edit, and delete todos, with data persistence using local storage.</p>
                   <div className='links'>
                    <a className='liveDemo' href='https://todo-sooty-kappa.vercel.app/' target='_blank' rel='noopener noreferrer'>Live Demo </a> 
                   <a  href='https://github.com/NitishManral/TODO' target='_blank' rel='noopener noreferrer'><Github className='gitRepo'/></a>
                   </div>
                </div>
           </div>
           <div className='project'>
                <img className='projectPic' src={calculator} alt='todo' />
                <div className="projectDetails">

                    <h3>Advanced Calculator</h3>
                    <p>A calculator application capable of performing both basic and advanced calculations, with the added functionality of storing a history of the user's calculations.</p>
                    <div className='links'>
                    <a className='liveDemo' href='https://scientific-calculator-oxbs.vercel.app/' target='_blank' rel='noopener noreferrer'>Live Demo </a> 
                   <a  href='https://github.com/NitishManral/scientific-calculator' target='_blank' rel='noopener noreferrer'><Github className='gitRepo'/></a>
                   </div>
                </div>
           </div>
           <div className='project'>
                <img className='projectPic' src={task} alt='task' />
                <div className="projectDetails">
                    <h3>Advanced Calculator</h3>
                    <p>This project is a backend for a task management system, built on a microservices architecture for scalability and flexibility. It uses MySQL for data storage and Redis for advanced caching, improving performance. Eureka Server is integrated for efficient service discovery, enhancing system resilience and fault tolerance. This setup provides a robust and efficient foundation for task management.</p>
                    <div className='links'>
                   <a  href='https://github.com/NitishManral/Task_Manager' target='_blank' rel='noopener noreferrer'><Github className='gitRepo'/></a>
                   </div>
                </div>
                
           </div>
           <div className='project'>
                <img className='projectPic' src={phantom} alt='phantom' />
                <div className="projectDetails">
                    <h3>Advanced Calculator</h3>
                    <p>This web app seamlessly displays user tokens by integrating with the Phantom cryptocurrency wallet, using deep links and the global window object for direct and secure management of digital assets.</p>
                    <div className='links'>
                    <a className='liveDemo' href='https://phantom-integration-application.vercel.app/' target='_blank' rel='noopener noreferrer'>Live Demo </a> 
                   <a  href='https://github.com/NitishManral/phantom-integration-application' target='_blank' rel='noopener noreferrer'><Github className='gitRepo'/></a>
                   </div>
                </div>
           </div>
           
        </div>
    );
};

export default Projects;