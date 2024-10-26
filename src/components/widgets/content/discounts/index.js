import style from './style.module.scss';
import Discount from './Discount';
import { DISCOUNT_ITEMS } from '../config';

function Discounts() {
  return (
    <div className={style['wrapper']}>
      {DISCOUNT_ITEMS.map((item, index) => (
        <Discount key={index} image={item.image} description={item.description} />
      ))}
    </div>
  );
}

export default Discounts;
