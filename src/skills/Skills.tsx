import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'DEVELOPMENT'}
                           description={'JavaScript, TypeScript, React, Redux, SCSS & CSS, Git'}/>
                    <Skill title={'TESTING'}
                           description={'Unit Tests, SnapShot, Storybook'}/>
                    <Skill title={'DESIGN'}
                           description={'Material UI, Figma, Photoshop'}/>
                    <Skill title={'SOCIAL'}
                           description={'Well-coordinated teamwork, with a sense of humor, small talk, easy and quick to learn'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;