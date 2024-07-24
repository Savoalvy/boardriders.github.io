import style from './style.module.scss';
import Selector from '../components/selector/index';
import IconLocation from '../components/img/header/location/index';
import Navigation from '../components/navigation';

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
