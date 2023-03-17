import React from 'react';
import style from "../contacts/Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

            </div>
        </div>
    );
}

export default Contacts;