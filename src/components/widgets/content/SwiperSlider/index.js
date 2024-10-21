import React from 'react';
import style from './style.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SliderContent from './sliderContent';
import { SLIDER_ITEMS } from './config';

const SliderSwiper = () => {
  return (
    <div className={style['slider-container']}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        spaceBetween={30}
        simulateTouch={true}
        keyboard={true}
        grabCursor={true}
        touchRatio={1.4}
        breakpoints={{
          1200: {
            slidesPerView: 4
          },
          880: {
            slidesPerView: 3
          },
          600: {
            slidesPerView: 2
          }
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {SLIDER_ITEMS.map((item) => (
          <SwiperSlide key={item.id} className={style['swiper-slide']}>
            <SliderContent
              imageSrc={item.imageSrc}
              name={item.name}
              type={item.type}
              price={item.price}
              discountPrice={item.discountPrice}
              discount={item.discount}
              onlySite={item.onlySite}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
