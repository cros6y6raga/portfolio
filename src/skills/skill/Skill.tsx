import React from 'react';
import style from './Skill.module.scss';
import skillImage from '../../assets/image/com-laptop-code-svgrepo-com.svg';

type PropsType = {
    title: string
    description: string
}

function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={skillImage} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Skill;