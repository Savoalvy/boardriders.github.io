import React from 'react';
import style from './style.module.scss';
import IconBackground from '../../../assets/icons/Background';
import FooterLogo from '../../../assets/img/footerLogo.png';
import classNames from 'classnames';
import FooterSocial from './FooterSocial/index';
import FooterNavigation from './FooterNavigation';
import FooterContacts from './FooterContacts';
import FooterApp from './FooterApp';
import FooterRef from './FooterReferal';

function Footer() {
  return (
    <footer className={style['footer']}>
      <IconBackground />
      <div className={style['footer__container']}>
        <div className={style['footer__header']}>
          <div className={style['footer__logo']}>
            <img src={FooterLogo} alt="Discount" className={style['footer__logo--image']} />
          </div>
          <FooterRef />
        </div>
        <div className={classNames(style['footer__main'], style['footer__content'])}>
          <FooterApp />
          <FooterContacts />
          <FooterNavigation />
        </div>
        <div className={style['footer__footer']}>
          <FooterSocial />
          <span className={style['footer__copyright']}>© 2020 Brd.ru. Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
