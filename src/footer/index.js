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
import FooterSocial from './footer__social';

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
              <span>{Text.footer.other.referal}</span>
              <span className={style['footer__newsletter-discount-percent']}>-10%</span>
              <span>{Text.footer.other.referalDiscount}</span>
            </div>
            <Button svg={IconTelegram} />
          </div>
        </div>
        <div className={combinedWrapperContent}>
          <div className={style['footer__app']}>
            <div className={style['footer__app-description']}>{Text.footer.other.app}</div>
            <div className={style['footer__app-icons']}>
              <div className={style['footer__store-icons']}>
                <Button svg={IconStore} />
                <Button svg={IconMarket} />
              </div>
              <IconQr />
            </div>
          </div>
          <div className={style['footer__contacts-wrapper']}>
            <span className={style['footer__contacts-font']}>{Text.footer.other.contact}</span>
            <div className={style['footer__contacts']}>
              <div className={style['footer__contacts-icons']}>
                <IconTelephone />
              </div>
              <div className={style['footer__contacts-description']}>
                <span className={style['footer__contacts-description--main-text']}>
                  <a href="tel:+375292420957p">{Text.footer.other.phone}</a>
                </span>
                <span className={style['footer__contacts-description--text']}>
                  {Text.footer.other.phoneText}
                </span>
              </div>
            </div>

            <div className={style['footer__contacts']}>
              <div className={style['footer__contacts-icons']}>
                <IconMail />
              </div>
              <div className={style['footer__contacts-description']}>
                <span className={style['footer__contacts-description--main-text']}>
                  {Text.footer.other.email}
                </span>
                <span className={style['footer__contacts-description--text']}>
                  {Text.footer.other.emailText}
                </span>
              </div>
            </div>
          </div>
          <div className={style['footer__navigation']}>
            <Navigation links={help} ulClassName={style['footer__navigation-column']} />
            <Navigation links={company} ulClassName={style['footer__navigation-column']} />
            <Navigation links={inc} ulClassName={style['footer__navigation-column']} />
          </div>
        </div>
        <div className={style['footer__wrapper']}>
          <FooterSocial />
          <span className={style['footer__copyright']}>{Text.footer.other.right}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
