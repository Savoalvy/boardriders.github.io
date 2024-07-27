import style from './style.module.scss';
import Selector from '../components/selector/index';
import IconLocation from '../components/img/header/location/index';
import Navigation from '../components/navigation';
import FreeDeliveryIcon from '../components/img/header/freeDelivery';
import PaymentIcon from '../components/img/header/payment';
import PurchaseReturnsIcon from '../components/img/header/purchaseReturns';
import IconWithText from './firstLayerIconsWrapper/index';
import Text from '../config/text';

function Header() {
  return (
    <div className={style.header}>
      <div className={style['first-layer']}>
        <div className={style['content-width']}>
          <div className={style['city-wrapper']}>
            <IconLocation />
            <Selector />
          </div>
          <Navigation />
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
        <div className={style['content-width']}>2</div>
      </div>
      <div className={style['third-layer']}>
        <div className={style['content-width']}>2</div>
      </div>
    </div>
  );
}

export default Header;
