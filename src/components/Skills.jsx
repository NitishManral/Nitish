import React from 'react';
import {ReactComponent as Bootstrap} from '../assets/Skill/Bootstrap_logo.svg';
import {ReactComponent as Html} from '../assets/Skill/html.svg';
import {ReactComponent as Js} from '../assets/Skill/javascript.svg';
import {ReactComponent as Css} from '../assets/Skill/css.svg';
import {ReactComponent as ReactLogo} from '../assets/Skill/reactjs.svg';
import {ReactComponent as Docker} from '../assets/Skill/icons8-docker.svg';
import {ReactComponent as Git} from '../assets/Skill/icons8-git.svg';
import {ReactComponent as Github} from '../assets/Skill/icons8-github.svg';
import {ReactComponent as MUI} from '../assets/Skill/icons8-material-ui.svg';
import {ReactComponent as MYSQL} from '../assets/Skill/icons8-mysql-96.svg';
import {ReactComponent as Node} from '../assets/Skill/icons8-nodejs.svg';
import {ReactComponent as Postgresql} from '../assets/Skill/icons8-postgresql.svg';
import {ReactComponent as Redux} from '../assets/Skill/icons8-redux.svg';
import {ReactComponent as Springboot} from '../assets/Skill/icons8-spring-boot.svg';
import {ReactComponent as Typescript} from '../assets/Skill/icons8-typescript.svg';
import {ReactComponent as Java} from '../assets/Skill/java.svg';
import {ReactComponent as Mongodb} from '../assets/Skill/mongodb.svg';
import {ReactComponent as Tailwind} from '../assets/Skill/tailwind.svg';
import '../styles/Skills.css';
const Skills = () => {
    return (
        <div className='skills'>
           
            <TagList/>
            
        </div>
    );
};

const TagList = () => {
   return (
    <div className="tag-list">
    <div className="loop-slider"  style={{ "--duration": "10000ms", "--direction": "normal" }}>
      <div className="inner">
      <div className="tag"><Html className='skill'/></div>
        <div className="tag"><Js className='skill'/></div>
        <div className="tag"><Css className='skill'/></div>
        <div className="tag"><ReactLogo className='skill'/></div>
        <div className="tag"><Docker className='skill'/></div>
        <div className="tag"><Git className='skill'/></div>
        <div className="tag"><Github className='skill'/></div>
        <div className="tag"><MUI className='skill'/></div>
        <div className="tag"><MYSQL className='skill'/>  </div>
        <div className="tag"><Node className='skill'/></div>
        <div className="tag"><Postgresql className='skill'/></div>
        <div className="tag"><Redux className='skill'/></div>
        <div className="tag"><Springboot className='skill'/></div>
        <div className="tag"><Typescript className='skill'/></div>
        <div className="tag"><Java className='skill'/></div>
        <div className="tag"><Mongodb className='skill'/></div>
        <div className="tag"><Tailwind className='skill'/></div>
        <div className="tag"><Html className='skill'/></div>
        <div className="tag"><Js className='skill'/></div>
        <div className="tag"><Css className='skill'/></div>
        <div className="tag"><ReactLogo className='skill'/></div>
        <div className="tag"><Docker className='skill'/></div>
        <div className="tag"><Git className='skill'/></div>
        <div className="tag"><Github className='skill'/></div>
        <div className="tag"><MUI className='skill'/></div>
        <div className="tag"><MYSQL className='skill'/>  </div>
        <div className="tag"><Node className='skill'/></div>
        <div className="tag"><Postgresql className='skill'/></div>
        <div className="tag"><Redux className='skill'/></div>
        <div className="tag"><Springboot className='skill'/></div>
        <div className="tag"><Typescript className='skill'/></div>
        <div className="tag"><Java className='skill'/></div>
        <div className="tag"><Mongodb className='skill'/></div>
        <div className="tag"><Tailwind className='skill'/></div>
      </div>
    </div>
    
    
    <div className="fade"></div>
  </div>
);
}

export default Skills;


