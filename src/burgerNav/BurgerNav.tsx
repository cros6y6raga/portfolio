import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(
            !menuIsOpen
        )
        console.log(menuIsOpen)
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}></div>
        </div>
    );
}

export default BurgerNav;