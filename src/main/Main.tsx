import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import mainImage from '../assets/image/EhZRBnTnFcA.jpg';

function Main() {

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Vladimir Brazhnikov</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}>
                    <img className={style.mainImg} src={mainImage} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;