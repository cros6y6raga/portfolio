import React from 'react';
import style from "../options/Options.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Options() {
    return (
        <div className={style.optionsBlock}>
            <div className={`${styleContainer.container} ${style.optionsContainer}`}>
                <h2 className={style.title}>Considering remote work</h2>
                <a className={style.hire} href="#">Hire me</a>
            </div>
        </div>
    );
}

export default Options;