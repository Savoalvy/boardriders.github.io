import style from './style.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import React from 'react';
import SliderBlogContent from './SliderBlogContent';
import { SLIDER_BLOG_ITEMS } from './config';

const SliderSwiperBlog = () => {
  return (
    <div className={style['slider-container']}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        simulateTouch={true}
        keyboard={true}
        grabCursor={true}
        mousewheel={true}
        touchRatio={1.3}>
        {SLIDER_BLOG_ITEMS.map((item) => (
          <SwiperSlide key={item.id} className={style['swiper-slide']}>
            <SliderBlogContent
              iframe={item.iframe}
              type={item.type}
              title={item.title}
              content={item.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiperBlog;
