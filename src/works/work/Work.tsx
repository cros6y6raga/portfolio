import React from 'react';
import style from './Work.module.css';

type PropsType = {
    title: string,
    description: string,
    style:any
}

function Work(props: PropsType) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer} style={props.style}>
                <a className={style.aWork} href="#">
                    Посмотреть
                </a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;