import style from './style.module.scss';
import Slider from '../components/carousel/index';
import img from '../components/img/content/content__brand-img/img.png';
import img_1 from '../components/img/content/content__brand-img/img_1.png';
import img_2 from '../components/img/content/content__brand-img/img_2.png';
import img_3 from '../components/img/content/content__brand-img/img_3.png';
import img_4 from '../components/img/content/content__brand-img/img_4.png';
import img_5 from '../components/img/content/content__brand-img/img_5.png';
import img_6 from '../components/img/content/content__brand-img/img_6.png';
import img_7 from '../components/img/content/content__brand-img/img_7.png';
import img_8 from '../components/img/content/content__brand-img/img_8.png';
import img_9 from '../components/img/content/content__brand-img/img_9.png';
import Snowboard from '../components/img/content/content-discount__image/discount-image-snowboard.png';
import Flowboard from '../components/img/content/content-discount__image/discount-image-flowboard.png';
import Discount from '../content/discount/index';

function Content() {
  return (
    <div className={style['content']}>
      <Slider />
      <div className={style['content-brand']}>
        <div className={style['content-brand__image']}>
          <img src={img} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_1} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_2} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_3} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_4} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_5} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image--anu']}>
          <img src={img_6} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_7} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_8} alt={'Картинка'} />
        </div>

        <div className={style['content-brand__image']}>
          <img src={img_9} alt={'Картинка'} />
        </div>
      </div>
      <div className={style['content-discount']}>
        <Discount image={Snowboard} description={'Название акции №1'} />
        <Discount image={Flowboard} description={'Название акции №1'} />
      </div>
      <div className={style['blok']}>Новинки</div>
      <div className={style['blok']}>Еще акция</div>
      <div className={style['blok']}>Популярные коллекции</div>
      <div className={style['blok']}>Акции</div>
      <div className={style['blok']}>Популярные коллекции</div>
    </div>
  );
}

export default Content;
