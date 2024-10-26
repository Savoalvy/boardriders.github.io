import img from '../../../assets/img/img.png';
import img_1 from '../../../assets/img/img_1.png';
import img_2 from '../../../assets/img/img_2.png';
import img_3 from '../../../assets/img/img_3.png';
import img_4 from '../../../assets/img/img_4.png';
import img_5 from '../../../assets/img/img_5.png';
import img_6 from '../../../assets/img/img_6.png';
import img_7 from '../../../assets/img/img_7.png';
import img_8 from '../../../assets/img/img_8.png';
import img_9 from '../../../assets/img/img_9.png';
import Snowboard from '../../../assets/img/discount-image-snowboard.png';
import Flowboard from '../../../assets/img/discount-image-flowboard.png';
import loyalty_1 from '../../../assets/img/loyaltyImg_1.png';
import loyalty_2 from '../../../assets/img/loyaltyImg_2.png';
import BoardridersClubLogo from '../../../assets/icons/BoardridersClubLogo';
import IconMail from '../../../assets/icons/Mail';

export const ITEMS = [
  {
    src: img
  },
  {
    src: img_1
  },
  {
    src: img_2
  },
  {
    src: img_3
  },
  {
    src: img_4
  },
  {
    src: img_5
  },
  {
    src: img_6,
    className: 'content-brand__image--anu'
  },
  {
    src: img_7
  },
  {
    src: img_8
  },
  {
    src: img_9
  }
];
export const DISCOUNT_ITEMS = [
  { image: Snowboard, description: 'Название акции №1' },
  { image: Flowboard, description: 'Название акции №2' }
];

export const LOYALTY_BLOCKS = [
  {
    image: loyalty_1,
    icon: <BoardridersClubLogo />,
    title: 'Программа лояльности',
    description: 'Зарабатывайте баллы и получайте преимущества',
    button: 'Вступить в клуб'
  },
  {
    image: loyalty_2,
    icon: <IconMail />,
    title: 'Скидка -10%',
    description: 'За подписку на наши новости',
    inputForm: true
  }
];
