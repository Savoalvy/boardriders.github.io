import style from './style.module.scss';
import Slider from './carousel';
import Snowboard from '../../../assets/img/discount-image-snowboard.png';
import Flowboard from '../../../assets/img/discount-image-flowboard.png';
import Discount from './Discount';
import { ITEMS } from './config';

function Content() {
  return (
    <div className={style['content']}>
      <Slider />
      <div className={style['content-brand']}>
        {ITEMS.map((item, i) => {
          return (
            <div key={i} className={style[item.className ?? 'content-brand__image']}>
              <img src={item.src} alt={'Картинка'} />
            </div>
          );
        })}
      </div>
      <div className={style['content-discount']}>
        <Discount image={Snowboard} description={'Название акции №1'} />
        <Discount image={Flowboard} description={'Название акции №1'} />
      </div>
    </div>
  );
}

export default Content;