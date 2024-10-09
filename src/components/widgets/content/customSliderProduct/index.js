import React from 'react';
import style from './style.module.scss';
import SliderArrow from '../../../../assets/icons/SliderArrow';

const SliderProduct = () => {
  return (
    <div className={style['slider']}>
      <div className={style['slider__arrow-left']}>
        <SliderArrow />
      </div>
      <div className={style['slider__arrow-right']}>
        <SliderArrow />
      </div>
      <div className={style['slider-content']}>
        <div className={style['slider-content__slide']}>1</div>
        <div className={style['slider-content__slide']}>2</div>
        <div className={style['slider-content__slide']}>3</div>
        <div className={style['slider-content__slide']}>4</div>
        <div className={style['slider-content__slide']}>5</div>
        <div className={style['slider-content__slide']}>6</div>
        <div className={style['slider-content__slide']}>7</div>
        <div className={style['slider-content__slide']}>8</div>
        <div className={style['slider-content__slide']}>9</div>
        <div className={style['slider-content__slide']}>10</div>
        <div className={style['slider-content__slide']}>11</div>
      </div>
    </div>
  );
};

export default SliderProduct;
