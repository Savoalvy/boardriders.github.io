import React, { useState } from 'react';
import style from './style.module.scss';
import Button from '../../../../../common/Button';
import Star from '../../../../../../assets/icons/Star';

const SliderContent = ({ src, name, type, price, discountPrice, discount, onlySite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorite = () => setIsFavorite((prevState) => !prevState);

  return (
    <div className={style['product']}>
      <div className={style['product-picture']}>
        <Button
          className={`${style['product-picture__favorite']} ${
            isFavorite ? style['product-picture__favorite--active'] : ''
          }`}
          svg={Star}
          onClick={favorite}
        />
        <div className={style['product-picture__image']}>
          <img src={src} alt={name} />
        </div>
        <div className={style['product-picture__bonuses']}>
          {discount && (
            <span className={style['product-picture__bonuses--discount']}>-{discount}%</span>
          )}
          {onlySite && <span className={style['product-picture__bonuses--site']}>{onlySite}</span>}
        </div>
      </div>
      <div className={style['product-description']}>
        <span className={style['product-description__name']}>{name}</span>
        <span className={style['product-description__type']}>{type}</span>
      </div>
      <div className={style['product-price']}>
        <span
          className={`${style['product-price__total']} ${
            discountPrice ? style['product-price__total--discounted'] : ''
          }`}>
          {price}
        </span>
        {discountPrice && (
          <span className={style['product-price__totalDiscount']}>{discountPrice}</span>
        )}
      </div>
    </div>
  );
};

export default SliderContent;
