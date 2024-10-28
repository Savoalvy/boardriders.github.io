import style from './style.module.scss';
import { ITEMS } from '../config';

function ContentBrands() {
  return (
    <div className={style['wrapper']}>
      {ITEMS.map((item, i) => {
        return (
          <div key={i} className={style[item.className ?? 'wrapper__image']}>
            <img src={item.src} alt={'Картинка'} />
          </div>
        );
      })}
    </div>
  );
}

export default ContentBrands;
