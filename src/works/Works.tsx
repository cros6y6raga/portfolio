import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Work from './work/Work';
import Title from '../common/components/title/Title';
import todoImage from '../assets/image/task-list.png';
import socialImage from '../assets/image/social-network.png';

function Works() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div id='works' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'My Works'}/>
                <div className={style.works}>
                    <Work style={todolist}
                          title={'Task-list'}
                          description={'It is a long established fact that a reader will be distracted by the readable ' +
                              'content of a page when looking at its layout.'}
                          link={'https://cros6y6raga.github.io/task-list/'}
                    />
                    <Work style={social}
                          title={'Social-network'}
                          description={'It is a long established fact that a reader will be distracted by the readable ' +
                              'content of a page when looking at its layout.'}
                          link={'https://cros6y6raga.github.io/social-network/'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;