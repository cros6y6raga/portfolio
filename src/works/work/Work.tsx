import React from 'react';
import style from './Work.module.css';

type PropsType = {
    title: string,
    description: string
}

function Work(props: PropsType) {
    return (
        <div className={style.work}>
            <a href="#">
                <img className={style.imgWork}
                     src="https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg" alt=""/>
            </a>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Work;