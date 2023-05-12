import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import laptop from '../assets/image/com-laptop-code-svgrepo-com.svg'
import warning from '../assets/image/con-warning-svgrepo-com (2).svg'
import palette from '../assets/image/des-palette-svgrepo-com.svg'
import bubble from '../assets/image/cha-bubble-female-svgrepo-com.svg'

function Skills() {
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'DEVELOPMENT'}
                           description={'JavaScript, TypeScript, React, Redux, SCSS & CSS, Git'}
                           images={laptop}
                    />
                    <Skill title={'TESTING'}
                           description={'Unit Tests, SnapShot, Storybook'}
                           images={warning}
                    />
                    <Skill title={'DESIGN'}
                           description={'Material UI, Figma, Photoshop'}
                           images={palette}
                    />
                    <Skill title={'SOCIAL'}
                           description={'Well-coordinated teamwork, with a sense of humor, small talk, easy and quick to learn'}
                           images={bubble}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;