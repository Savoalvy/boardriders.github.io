import React from 'react';
import { Carousel } from 'antd';
import style from './style.module.scss';
import Slide from './CarouselSlide';
import { SLIDES_CONTENT } from './config';

const Slider = () => (
  <Carousel className={style['slider']} autoplay>
    {SLIDES_CONTENT.map((slide, index) => (
      <Slide key={index} srs={slide.src} description={slide.description} />
    ))}
  </Carousel>
);
export default Slider;
