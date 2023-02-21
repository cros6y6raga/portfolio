import React from 'react';
import style from './Skill.module.css';

function Skill(props: any) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
        </div>
    );
}

export default Skill;