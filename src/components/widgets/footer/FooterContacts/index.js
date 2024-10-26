import React from 'react';
import style from './style.module.scss';
import { footerContacts } from '../config';

function FooterContacts() {
  return (
    <div className={style['wrapper']}>
      <span className={style['wrapper-tittle']}>Контакты</span>
      {footerContacts.map((item, index) => (
        <div key={index} className={style['wrapper-contacts']}>
          <div className={style['wrapper-contacts-icons']}>{item.icon}</div>
          <div className={style['wrapper-contacts-description']}>
            <span className={style['wrapper-contacts-description__mainText']}>{item.mainText}</span>
            <span className={style['wrapper-contacts-description__text']}>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterContacts;
