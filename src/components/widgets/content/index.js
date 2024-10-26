import style from './style.module.scss';
import Slider from './carousel';
import DiscountImg from '../../../assets/img/discountBlockImg.png';
import { ITEMS } from './config';
import DiscountBlock from './DiscountBlock';
import SliderSwiperBlog from './swiperSliderBlog';
import ProductBlock from './contentProductBlock';
import Discounts from './discounts';
import Loyalty from './Loyalty';

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
      <Discounts />
      <ProductBlock title={'Новинки'} buttonName={'Показать больше'} />
      <DiscountBlock
        title={'Название Акции'}
        description={
          'Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. '
        }
        image={DiscountImg}
      />
      <ProductBlock title={'DC Shoes популярное в коллекции'} buttonName={'Показать больше'} />
      <SliderSwiperBlog />
      <Loyalty />
    </div>
  );
}

export default Content;
