import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm} action="">
                    <input className={style.contactsInput} type="text" placeholder={'Name'}/>
                    <input className={style.contactsInput} type="text" placeholder={'E-mail'}/>
                    <textarea className={style.contactsTextarea} placeholder={'Message'}></textarea>
                </form>
                <a className={style.contactsSend} href="">SEND MESSAGE</a>
            </div>
        </div>
    );
}

export default Contacts;