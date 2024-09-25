import React from 'react';
import style from './style.module.scss';
import IconBackground from '../../../assets/icons/Background';
import FooterLogo from '../../../assets/img/footerLogo.png';
import Button from '../../common/Button';
import IconTelegram from '../../../assets/icons/Telegram';
import IconMail from '../../../assets/icons/Mail';
import Navigation from '../../common/Navigation';
import IconStore from '../../../assets/icons/Store';
import IconMarket from '../../../assets/icons/Market';
import IconQr from '../../../assets/icons/Qr';
import IconTelephone from '../../../assets/icons/Telephone';
import classNames from 'classnames';
import FooterSocial from './FooterSocial/index';
import {
  navigationFooterLeftColumn,
  navigationFooterMiddleColumn,
  navigationFooterRightColumn
} from './config';

function Footer() {
  return (
    <footer className={style['footer']}>
      <IconBackground />
      <div className={style['footer__container']}>
        <div className={style['footer__wrapper']}>
          <div className={style['footer__logo']}>
            <img src={FooterLogo} alt="Discount" className={style['footer__logo--image']} />
          </div>
          <div className={style['footer__newsletter-Discount']}>
            <div className={style['footer__newsletter-Discount-content']}>
              <IconMail />
              <span>Подпишись на рассылку и получи</span>
              <span className={style['footer__newsletter-Discount-percent']}>-10%</span>
              <span>скидку</span>
            </div>
            <Button svg={IconTelegram} />
          </div>
        </div>
        <div className={classNames(style.footer__wrapper, style.footer__content)}>
          <div className={style['footer__app']}>
            <div className={style['footer__app-description']}>
              Доступ к ранним релизам в приложении
            </div>
            <div className={style['footer__app-icons']}>
              <div className={style['footer__app-icons-Store']}>
                <Button svg={IconStore} />
                <Button svg={IconMarket} />
              </div>
              <IconQr />
            </div>
          </div>
          <div className={style['footer__contacts-wrapper']}>
            <span className={style['footer__contacts-font']}>Контакты</span>
            <div className={style['footer__contacts']}>
              <div className={style['footer__contacts-icons']}>
                <IconTelephone />
              </div>
              <div className={style['footer__contacts-description']}>
                <span className={style['footer__contacts-description--main-text']}>
                  <a href="tel:+375292420957">+375 (29) 242-09-57</a>
                </span>
                <span className={style['footer__contacts-description--text']}>
                  Бесплатная горячая линия Ежедневно с 9 до 21
                </span>
              </div>
            </div>

            <div className={style['footer__contacts']}>
              <div className={style['footer__contacts-icons']}>
                <IconMail />
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
            <Navigation
              links={navigationFooterLeftColumn}
              ulClassName={style['footer__navigation-column']}
            />
            <Navigation
              links={navigationFooterMiddleColumn}
              ulClassName={style['footer__navigation-column']}
            />
            <Navigation
              links={navigationFooterRightColumn}
              ulClassName={style['footer__navigation-column']}
            />
          </div>
        </div>
        <div className={style['footer__wrapper']}>
          <FooterSocial />
          <span className={style['footer__copyright']}>© 2020 Brd.ru. Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
