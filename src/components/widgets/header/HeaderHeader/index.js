import style from './style.module.scss';
import IconLocation from '../../../../assets/icons/Location';
import Selector from '../../../common/Selector';
import Navigation from '../../../common/Navigation';
import { navigationUpperLayer } from '../config';
import { INFO_ITEMS } from './InfoIconsWithDescription/config';
import IconsWrapper from './InfoIconsWithDescription';

function HeaderHeader() {
  return (
    <div className={style['wrapper']}>
      <div className={style['wrapper-grid']}>
        <div className={style['wrapper-grid-cityWrapper']}>
          <div className={style['wrapper-grid-cityWrapper__select']}>
            <IconLocation />
            <Selector />
          </div>
          <Navigation
            links={navigationUpperLayer}
            className={style['wrapper-grid-cityWrapper__links']}
          />
        </div>
        <div className={style['wrapper-grid-infoWrapper']}>
          {INFO_ITEMS.map((item) => (
            <IconsWrapper key={item.id} SvgComponent={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderHeader;
