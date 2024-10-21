import style from './style.module.scss';
import Button from '../../../../common/ButtonSVG';
import Star from '../../../../../assets/icons/Star';
import img from '../../../../../assets/img/productImg.png';

const SliderContent = () => {
  return (
    <div className={style['product']}>
      <div className={style['product-picture']}>
        <Button className={style['product-picture__favorites']} svg={Star} />
        <div className={style['product-picture__image']}>
          <img src={img} alt="Картинка" />
        </div>
        <span className={style['product-picture__discount']}>-50%</span>
      </div>
      <div className={style['product-description']}>
        <span className={style['product-description__name']}>LIB TECH</span>
        <span className={style['product-description__type']}>Мужской Сноуборд</span>
      </div>
      <div className={style['product-price']}>
        <span className={style['product-price__total']}>33290</span>
        <span className={style['product-price__totalDiscount']}>18192</span>
      </div>
    </div>
  );
};

export default SliderContent;
