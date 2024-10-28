import React from 'react';
import style from './style.module.scss';

const Slide = ({ srs, description }) => (
  <div className={style['slide']}>
    <img className={style['slide__image']} src={srs} alt="Картинка" />
    <div className={style['slide__description']}>{description}</div>
  </div>
);

export default Slide;
