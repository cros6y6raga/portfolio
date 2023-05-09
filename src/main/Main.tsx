import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import mainImage from '../assets/image/EhZRBnTnFcA.jpg';
import Particles from 'react-tsparticles';

function Main() {

    const Fade = require("react-reveal/Fade");

    const particlesOptions = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
        }
    }

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade top>
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
            </Fade>
        </div>
    );
}

export default Main;