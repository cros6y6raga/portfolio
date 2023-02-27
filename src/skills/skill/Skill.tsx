import React from 'react';
import style from './Skill.module.css';

type PropsType = {
    title: string
}

function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <div className='description'></div>
        </div>
    );
}

export default Skill;