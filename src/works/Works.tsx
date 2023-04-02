import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Work from './work/Work';
import Title from '../common/components/title/Title';
import todoImage from '../assets/image/image9.jpg';
import socialImage from '../assets/image/socialnetworking-13cadb0b8b5941ab999a13c06e468821.jpg';

function Works() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'My Works'}/>
                <div className={style.works}>
                    <Work style={todolist} title={'Task-list'}
                          description={'It is a long established fact that a reader will be distracted by the readable ' +
                              'content of a page when looking at its layout.'}/>
                    <Work style={social} title={'Social-network'}
                          description={'It is a long established fact that a reader will be distracted by the readable ' +
                              'content of a page when looking at its layout.'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;