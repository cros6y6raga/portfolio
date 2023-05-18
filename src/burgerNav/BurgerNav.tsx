import React from 'react';
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function BurgerNav() {
    return (
        <div className={style.burgerNav}>
            <div className={style.burgerNavItems}>
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
            <div className={style.burgerBtn}></div>
        </div>
    );
}

export default BurgerNav;