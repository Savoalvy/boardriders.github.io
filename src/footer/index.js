import React from 'react';
import style from './style.module.scss';
import IconBackground from '../components/img/footer/background';
import FooterLogo from '../components/img/footer/logo/footerLogo.png';
import Button from '../components/button/index';
import IconTelegram from '../components/img/footer/telegram';
import IconMail from '../components/img/footer/mail';

function Footer() {
  return (
    <div className={style.footer}>
      <IconBackground />
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.logoWrapper}>
            <img src={FooterLogo} alt="Discount" className={style.logo} />
          </div>
          <div className={style.discount}>
            <span className={style.percentWrapper}>
              <IconMail />
              Подпишись на рассылку и получи <span className={style.percent}>-10%</span> скидку
            </span>
            <Button svg={IconTelegram} />
          </div>
        </div>
        <div className={`${style.wrapper} ${style.content}`}></div>
        <div className={style.wrapper}>1</div>
      </div>
    </div>
  );
}

export default Footer;
