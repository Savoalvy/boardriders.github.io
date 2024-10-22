import React from 'react';
import style from './style.module.scss';

const DiscountBlock = ({ image, description, title }) => (
  <div className={style['discount']}>
    <div className={style['discount__image']}>
      <img src={image} alt="Картинка" />
    </div>

    <span className={style['discount__title']}>{title}</span>
    <span className={style['discount__description']}>{description}</span>
  </div>
);

export default DiscountBlock;
