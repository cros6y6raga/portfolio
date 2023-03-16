import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work title={'Task-list'}
                          description={'It is a long established fact that a reader will be distracted by the readable ' +
                              'content of a page when looking at its layout.'}/>
                    <Work title={'Social-network'}
                          description={'It is a long established fact that a reader will be distracted by the readable ' +
                              'content of a page when looking at its layout.'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;