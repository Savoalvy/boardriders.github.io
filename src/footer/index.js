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
  const combinedContentItem = classNames(style.footer__content, style.footer__item);
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
          <div className={style['footer__item']}>
            <div className={style['footer__item-description']}>
              Доступ к ранним релизам в приложении
            </div>
            <div className={style['footer__item-icons']}>
              <div className={style['footer__store-icons']}>
                <IconStore />
                <IconMarket />
              </div>
              <IconQr />
            </div>
          </div>
          <div className={combinedContentItem}>
            <span className={style.text1}>Контакты</span>
            <div className={style.wrapperItem1}>
              <div className={style.wrapperIconTel}>
                <IconTelephone />
              </div>
              <span>8 (800) 511-74-68 </span>
              <span>Бесплатная горячая линия Ежедневно с 9 до 21</span>
            </div>

            <div className={style.wrapperItem2}>
              <div>
                <div className={style.wrapperIconTg}>
                  <IconTelegram />
                </div>
                <span>Контактный Email</span>
                <span>info@brd.ru</span>
              </div>
            </div>
          </div>
          <div className={style.footerNavigation}>
            <Navigation links={help} ulClassName={style.helpWrapper} />
            <Navigation links={company} ulClassName={style.companyWrapper} />
            <Navigation links={inc} ulClassName={style.incWrapper} />
          </div>
        </div>
        <div className={style['footer__wrapper']}>1</div>
      </div>
    </footer>
  );
}

export default Footer;
