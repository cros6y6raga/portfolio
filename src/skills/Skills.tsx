import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
             <Title text={'Skills'}/>
                <div className={style.skills}>
                <Skill title={'JS'}
                       description={'It is a long established fact that a reader will be distracted by the readable ' +
                           'content of a page when looking at its layout.'}/>
                <Skill title={'CSS'}
                       description={'It is a long established fact that a reader will be distracted by the readable ' +
                           'content of a page when looking at its layout.'}/>
                <Skill title={'React'}
                       description={'It is a long established fact that a reader will be distracted by the readable ' +
                           'content of a page when looking at its layout.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;