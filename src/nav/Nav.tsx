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
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Main</Link>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to="skills">
                Skills
            </Link>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to="works">
                Works
            </Link>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to="contacts">
                Contacts
            </Link>
        </div>
    );
}

export default Nav;