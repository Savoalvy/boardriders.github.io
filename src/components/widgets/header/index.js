import React from 'react';
import Navigation from '../../common/Navigation';
import style from './style.module.scss';
import Selector from '../../common/Selector';
import IconLocation from '../../../assets/icons/Location';
import FreeDeliveryIcon from '../../../assets/icons/FreeDelivery';
import PaymentIcon from '../../../assets/icons/Payment';
import PurchaseReturnsIcon from '../../../assets/icons/PurchaseReturns';
import IconWithText from './FirstLayerIconsWrapper';
import IconLogo from '../../../assets/icons/HeaderLogo';
import IconFavourites from '../../../assets/icons/Favourites';
import IconLogin from '../../../assets/icons/Login';
import IconBasket from '../../../assets/icons/Basket';
import IconSearch from '../../../assets/icons/Search';
import Button from '../../common/ButtonSVG';
import { navigationUpperLayer, navigationMiddleLayer, navigationUnderLayer } from './config';

function Header() {
  return (
    <header className={style['header']}>
      <div className={style['header-top']}>
        <div className={style['header__content']}>
          <div className={style['header-top__location']}>
            <div className={style['header-top__location--select']}>
              <IconLocation />
              <Selector />
            </div>
            <Navigation links={navigationUpperLayer} navClassName={style['header__nav--top']} />
          </div>
          <div className={style['header-top__info']}>
            <IconWithText SvgComponent={FreeDeliveryIcon} text="Бесплатная доставка *" />
            <IconWithText SvgComponent={PaymentIcon} text="Оплата при получении" />
            <IconWithText SvgComponent={PurchaseReturnsIcon} text="Возврат в течение 14 дней" />
          </div>
        </div>
      </div>
      <div className={style['header-middle']}>
        <div className={style['header__content']}>
          <Navigation links={navigationMiddleLayer} navClassName={style['header__nav--middle']} />
          <IconLogo />
          <div className={style['header-middle__buttons-wrapper']}>
            <Button svg={IconLogin} />
            <Button svg={IconFavourites} />
            <Button svg={IconBasket} />
            <Button svg={IconSearch} />
          </div>
        </div>
      </div>
      <div className={style['header-lower']}>
        <div className={style['header__content']}>
          <Navigation links={navigationUnderLayer} navClassName={style['header__nav--lower']} />
        </div>
      </div>
    </header>
  );
}

export default Header;
