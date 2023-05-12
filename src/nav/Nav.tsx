import React from 'react';
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            {/*<a href="">Main</a>*/}
            {/*<a href="">Skills</a>*/}
            {/*<a href="">Works</a>*/}
            {/*<a href="">Contacts</a>*/}
            <Link to="main">
                Main
            </Link>
            <Link to="skills">
                Skills
            </Link>
            <Link to="works">
                Works
            </Link>
            <Link to="contacts">
                Contacts
            </Link>
        </div>
    );
}

export default Nav;