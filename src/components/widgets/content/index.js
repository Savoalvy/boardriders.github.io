import style from './style.module.scss';
import Slider from './carousel';
import SliderSwiperBlog from './swiperSliderBlog';
import Discounts from './discounts';
import Loyalty from './Loyalty';
import ContentBrands from './ContentBrand';
import { PRODUCT_DISCOUNT_COMPONENTS_RENDER } from './config';

function Content() {
  return (
    <div className={style['content']}>
      <Slider />
      <ContentBrands />
      <Discounts />
      {PRODUCT_DISCOUNT_COMPONENTS_RENDER.map(({ component: Component, props }, index) => (
        <Component key={index} {...props} />
      ))}
      <SliderSwiperBlog />
      <Loyalty />
    </div>
  );
}

export default Content;
