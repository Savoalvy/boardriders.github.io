import style from './style.module.scss';
import Slider from './carousel';
import Snowboard from '../../../assets/img/discount-image-snowboard.png';
import Flowboard from '../../../assets/img/discount-image-flowboard.png';
import DiscountImg from '../../../assets/img/discountBlockImg.png';
import Discount from './Discount';
import { ITEMS } from './config';
import ButtonDefault from '../../common/ButtonDefault';
import SliderSwiper from './swiperSlider';
import DiscountBlock from './DiscountBlock';
import SliderSwiperBlog from './swiperSliderBlog';

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
      <div className={style['content-slide']}>
        <span className={style['content-slide__heading']}>Новинки</span>
        <SliderSwiper />
        <ButtonDefault text={'Показать больше'} styles={style['content__btnMore']} />
      </div>
      <DiscountBlock
        title={'Название Акции'}
        description={
          'Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. '
        }
        image={DiscountImg}
      />
      <div className={style['content-slide']}>
        <span className={style['content-slide__heading']}>DC Shoes популярное в коллекции</span>
        <SliderSwiper />
        <ButtonDefault text={'Показать больше'} styles={style['content__btnMore']} />
      </div>
      <SliderSwiperBlog />
    </div>
  );
}

export default Content;
