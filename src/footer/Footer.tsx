import React from 'react';
import style from "./Footer.module.scss";
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Vladimir Brazhnikov</h2>
                <div className={style.socialContainer}>
                    <a className={style.social} href="https://github.com/cros6y6raga">GITHUB</a>
                    <a className={style.social} href="https://vk.com/crosbybraga">VK</a>
                    <a className={style.social} href="https://t.me/crosbybraga">TELEGRAM</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;