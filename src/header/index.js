import React from 'react';
import Navigation from '../components/navigation';
import style from './style.module.scss';
import Selector from '../components/selector/index';
import IconLocation from '../components/img/header/location/index';
import FreeDeliveryIcon from '../components/img/header/freeDelivery';
import PaymentIcon from '../components/img/header/payment';
import PurchaseReturnsIcon from '../components/img/header/purchaseReturns';
import IconWithText from './firstLayerIconsWrapper/index';
import IconLogo from '../components/img/header/logo';
import IconFavourites from '../components/img/header/favourites';
import IconLogin from '../components/img/header/login';
import IconBasket from '../components/img/header/basket';
import IconSearch from '../components/img/header/search';
import Text, { mapText } from '../config/text';

function Header() {
  const firstLayerNavigation = mapText(Text.header.firstLayer.navigation);
  const secondLayer = mapText(Text.header.secondLayer);
  const thirdLayer = mapText(Text.header.thirdLayer);

  return (
    <div className={style.header}>
      <div className={style['first-layer']}>
        <div className={style['content-width']}>
          <div className={style['city-wrapper']}>
            <IconLocation />
            <Selector />
          </div>
          <Navigation
            links={firstLayerNavigation}
            navClassName={style['nav-first-layer']}
            navLinkClassName={style['nav-link-first']}
          />
          <div className={style['icon-with-text-wrapper']}>
            <IconWithText
              SvgComponent={FreeDeliveryIcon}
              text={Text.header.firstLayer.freeDelivery}
            />
            <IconWithText SvgComponent={PaymentIcon} text={Text.header.firstLayer.payment} />
            <IconWithText
              SvgComponent={PurchaseReturnsIcon}
              text={Text.header.firstLayer.purchaseReturns}
            />
          </div>
        </div>
      </div>
      <div className={style['second-layer']}>
        <div className={style['content-width']}>
          <Navigation
            links={secondLayer}
            navClassName={style['nav-second-layer']}
            navLinkClassName={style['nav-link-second']}
          />
          <IconLogo />
          <div className={style['icons-wrapper']}>
            <IconLogin />
            <IconFavourites />
            <IconBasket />
            <IconSearch />
          </div>
        </div>
      </div>
      <div className={style['third-layer']}>
        <div className={style['content-width']}>
          <Navigation
            links={thirdLayer}
            navClassName={style['nav-third-layer']}
            navLinkClassName={style['nav-link-third']}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
