import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="works">Works</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;