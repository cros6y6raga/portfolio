import React from 'react';
import style from "../contacts/Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm} action="">
                    <input className={style.contactsInput} type="text"/>
                    <input className={style.contactsInput} type="text"/>
                    <textarea className={style.contactsTextarea} name="" id=""></textarea>
                </form>
                <a href="">Отправить</a>
            </div>
        </div>
    );
}

export default Contacts;