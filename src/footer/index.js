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
import IconTelephone from '../components/img/footer/telephone';
import classNames from 'classnames';

function Footer() {
  const help = mapText(Text.footer.help);
  const company = mapText(Text.footer.company);
  const inc = mapText(Text.footer.inc);
  const combinedWrapperContent = classNames(style.footer__wrapper, style.footer__content);
  return (
    <footer className={style['footer']}>
      <IconBackground />
      <div className={style['footer__container']}>
        <div className={style['footer__wrapper']}>
          <div className={style['footer__logo']}>
            <img src={FooterLogo} alt="Discount" className={style['footer__logo--image']} />
          </div>
          <div className={style['footer__newsletter-discount']}>
            <div className={style['footer__newsletter-discount-content']}>
              <IconMail />
              <span>Подпишись на рассылку и получи</span>
              <span className={style['footer__newsletter-discount-percent']}>-10%</span>
              <span>cкидку</span>
            </div>
            <Button svg={IconTelegram} />
          </div>
        </div>
        <div className={combinedWrapperContent}>
          <div className={style['footer__app']}>
            <div className={style['footer__app-description']}>
              Доступ к ранним релизам в приложении
            </div>
            <div className={style['footer__app-icons']}>
              <div className={style['footer__store-icons']}>
                <IconStore />
                <IconMarket />
              </div>
              <IconQr />
            </div>
          </div>
          <div className={style['footer__contacts-wrapper']}>
            <span className={style['footer__contacts--style']}>Контакты</span>
            <div className={style['footer__contacts']}>
              <div className={style['footer__contacts-icons']}>
                <IconTelephone />
              </div>
              <div className={style['footer__contacts-description']}>
                <span className={style['footer__contacts-description--main-text']}>
                  8 (800) 511-74-68
                </span>
                <span className={style['footer__contacts-description--text']}>
                  Бесплатная горячая линия Ежедневно с 9 до 21
                </span>
              </div>
            </div>

            <div className={style['footer__contacts']}>
              <div className={style['footer__contacts-icons']}>
                <IconTelegram />
              </div>
              <div className={style['footer__contacts-description']}>
                <span className={style['footer__contacts-description--main-text']}>
                  Контактный Email
                </span>
                <span className={style['footer__contacts-description--text']}>info@brd.ru</span>
              </div>
            </div>
          </div>
          <div className={style['footer__navigation']}>
            <Navigation links={help} ulClassName={style['footer__navigation-column']} />
            <Navigation links={company} ulClassName={style['footer__navigation-column']} />
            <Navigation links={inc} ulClassName={style['footer__navigation-column']} />
          </div>
        </div>
        <div className={style['footer__wrapper']}>1</div>
      </div>
    </footer>
  );
}

export default Footer;
