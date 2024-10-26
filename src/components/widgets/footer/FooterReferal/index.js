import React from 'react';
import style from './style.module.scss';
import IconMail from '../../../../assets/icons/Mail';
import Button from '../../../common/Button';
import IconTelegram from '../../../../assets/icons/Telegram';
import { footerRef } from '../config';

function FooterRef() {
  return (
    <div className={style.wrapper}>
      <div className={style['wrapper-content']}>
        <IconMail />
        {footerRef.map((item, index) => (
          <span key={index} className={item.className || ''}>
            {item.text}
          </span>
        ))}
      </div>
      <Button className={style['button']} svg={IconTelegram} />
    </div>
  );
}

export default FooterRef;
