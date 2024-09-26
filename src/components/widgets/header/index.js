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
    <div className={style.header}>
      <div className={style['first-layer']}>
        <div className={style['content-width']}>
          <div className={style['city-wrapper']}>
            <IconLocation />
            <Selector />
          </div>
          <Navigation
            links={navigationUpperLayer}
            navClassName={style['nav-first-layer']}
            navLinkClassName={style['nav-link-first']}
          />
          <div className={style['icon-with-text-wrapper']}>
            <IconWithText SvgComponent={FreeDeliveryIcon} text={'Бесплатная доставка *'} />
            <IconWithText SvgComponent={PaymentIcon} text={'Оплата при получении'} />
            <IconWithText SvgComponent={PurchaseReturnsIcon} text={'Возврат в течение 14 дней'} />
          </div>
        </div>
      </div>
      <div className={style['second-layer']}>
        <div className={style['content-width']}>
          <Navigation
            links={navigationMiddleLayer}
            navClassName={style['nav-second-layer']}
            navLinkClassName={style['nav-link-second']}
          />
          <IconLogo />
          <div className={style['icons-wrapper']}>
            <Button svg={IconLogin} />
            <Button svg={IconFavourites} />
            <Button svg={IconBasket} />
            <Button svg={IconSearch} />
          </div>
        </div>
      </div>
      <div className={style['third-layer']}>
        <div className={style['content-width']}>
          <Navigation
            links={navigationUnderLayer}
            navClassName={style['nav-third-layer']}
            navLinkClassName={style['nav-link-third']}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
