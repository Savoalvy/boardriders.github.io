import React from 'react';
import style from './style.module.scss';

const Discount = ({ image, description }) => (
  <div className={style['discount']}>
    <img className={style['discount__image']} src={image} alt="Картинка" />
    <div className={style['discount__description']}>{description}</div>
  </div>
);

export default Discount;
