import style from './style.module.scss';
import SliderSwiper from './swiperSlider';
import Button from '../../../common/Button';

function ProductBlock({ title, buttonName }) {
  return (
    <div className={style['wrapper']}>
      <span className={style['wrapper__title']}>{title}</span>
      <SliderSwiper />
      <Button className={style['wrapper__button']} text={buttonName} />
    </div>
  );
}

export default ProductBlock;
