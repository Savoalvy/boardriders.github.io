import React from 'react';
import { Carousel } from 'antd';
import style from './style.module.scss';
import image from '../../../../assets/img/slider__icon.jpg';
import Slide from './CarouselSlide';

const Slider = () => (
  <Carousel className={style['slider']} autoplay>
    <Slide image={image} description="WINTER SALE ДО -70%" />
    <Slide image={image} description="WINTER SALE ДО -70%" />
    <Slide image={image} description="WINTER SALE ДО -70%" />
    <Slide image={image} description="WINTER SALE ДО -70%" />
  </Carousel>
);
export default Slider;
