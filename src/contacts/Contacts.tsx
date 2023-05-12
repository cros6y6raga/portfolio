import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {

    const Fade = require("react-reveal/Fade");

    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
            <Fade left>
                <form className={style.contactsForm} action="">
                    <input className={style.contactsInput} type="text" placeholder={'Name'}/>
                    <input className={style.contactsInput} type="text" placeholder={'E-mail'}/>
                    <textarea className={style.contactsTextarea} placeholder={'Message'}></textarea>
                </form>
            </Fade>
                <button className={style.contactsSend} type={'submit'}>send message</button>
            </div>
        </div>
    );
}

export default Contacts;