import React from 'react';
import { Carousel } from 'antd';
import style from './style.module.scss';
import image from '../img/content/slider__img/slider__icon.jpg';

const Slider = () => (
  <Carousel className={style['slider']} autoplay>
    <div>
      <div className={style['slider__slide']}>
        <img className={style['slider__slide--image']} src={image} alt={'Картинка'} />
        <div className={style['slider__slide--description']}>WINTER SALE ДО -70%</div>
      </div>
    </div>
    <div>
      <div className={style['slider__slide']}>
        <img className={style['slider__slide--image']} src={image} alt={'Картинка'} />
        <div className={style['slider__slide--description']}>WINTER SALE ДО -70%</div>
      </div>
    </div>
    <div>
      <div className={style['slider__slide']}>
        <img className={style['slider__slide--image']} src={image} alt={'Картинка'} />
        <div className={style['slider__slide--description']}>WINTER SALE ДО -70%</div>
      </div>
    </div>
    <div>
      <div className={style['slider__slide']}>
        <img className={style['slider__slide--image']} src={image} alt={'Картинка'} />
        <div className={style['slider__slide--description']}>WINTER SALE ДО -70%</div>
      </div>
    </div>
  </Carousel>
);
export default Slider;
