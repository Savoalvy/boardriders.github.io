import React from 'react';
import style from './style.module.scss';
import IconBackground from '../components/img/footer/background';
import FooterLogo from '../components/img/footer/logo/footerLogo.png';
import Button from '../components/button/index';
import IconTelegram from '../components/img/footer/telegram';
import IconMail from '../components/img/footer/mail';
import Navigation from '../components/navigation';
import Text, { mapText } from '../config/text';
import IconStore from '../components/img/footer/store';
import IconMarket from '../components/img/footer/market';
import IconQr from '../components/img/footer/qr';

function Footer() {
  const help = mapText(Text.footer.help);
  const company = mapText(Text.footer.company);
  const inc = mapText(Text.footer.inc);
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
        <div className={`${style.wrapper} ${style.content}`}>
          <div className={style.item}>
            <div className={style.ite1}>Доступ к ранним релизам в приложении</div>
            <div className={style.ite}>
              <div className={style.storeWrapper}>
                <IconStore />
                <IconMarket />
              </div>
              <IconQr />
            </div>
          </div>
          <div className={style.item}>1</div>
          <div className={style.footerNavigation}>
            <Navigation links={help} ulClassName={style.helpWrapper} />
            <Navigation links={company} ulClassName={style.companyWrapper} />
            <Navigation links={inc} ulClassName={style.incWrapper} />
          </div>
        </div>
        <div className={style.wrapper}>1</div>
      </div>
    </div>
  );
}

export default Footer;
