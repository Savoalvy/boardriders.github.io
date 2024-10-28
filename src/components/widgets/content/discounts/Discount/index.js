import React from 'react';
import style from './style.module.scss';

const Discount = ({ src, description }) => (
  <div className={style['discount']}>
    <img className={style['discount__image']} src={src} alt="Картинка" />
    <div className={style['discount__description']}>{description}</div>
  </div>
);

export default Discount;
