import React from 'react';
import style from './style.module.scss';
import Button from '../../../common/Button';
import IconQr from '../../../../assets/icons/Qr';
import { footerAppIcons } from '../config';

function FooterApp() {
  return (
    <div className={style['wrapper']}>
      <div className={style['wrapper-description']}>Доступ к ранним релизам в приложении</div>
      <div className={style['wrapper-icons']}>
        <div className={style['wrapper-icons-buttonsWrapper']}>
          {footerAppIcons.map((item, index) => (
            <Button key={index} className={style['button']} svg={item} />
          ))}
        </div>
        <IconQr />
      </div>
    </div>
  );
}

export default FooterApp;
