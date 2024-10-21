import React from 'react';
import style from './style.module.scss'; // если есть кастомные стили для слайдов
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SliderContent from './sliderContent';

const SliderSwiper = () => {
  return (
    <div className={style['slider-container']}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        spaceBetween={30} // расстояние между слайдами
        slidesPerView={4} // кол-во слайдов, видимых одновременно
        simulateTouch={true}
        keyboard={true}
        grabCursor={true}
        touchRatio={1.2}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className={style['swiper-slide']}>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>Slide 2</SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>Slide 3</SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>Slide 4</SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>Slide 5</SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>Slide 6</SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>Slide 7</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
