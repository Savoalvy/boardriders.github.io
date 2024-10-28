import BoardridersClubLogo from '../../../assets/icons/BoardridersClubLogo';
import IconMail from '../../../assets/icons/Mail';
import ProductBlock from './contentProductBlock';
import DiscountBlock from './DiscountBlock';

export const ITEMS = [
  {
    src: '/static/img/img.png'
  },
  {
    src: '/static/img/img_1.png'
  },
  {
    src: '/static/img/img_2.png'
  },
  {
    src: '/static/img/img_3.png'
  },
  {
    src: '/static/img/img_4.png'
  },
  {
    src: '/static/img/img_5.png'
  },
  {
    src: '/static/img/img_6.png',
    className: 'wrapper__image--anu'
  },
  {
    src: '/static/img/img_7.png'
  },
  {
    src: '/static/img/img_8.png'
  },
  {
    src: '/static/img/img_9.png'
  }
];
export const DISCOUNT_ITEMS = [
  { src: '/static/img/discount-image-snowboard.png', description: 'Название акции №1' },
  { src: '/static/img/discount-image-flowboard.png', description: 'Название акции №2' }
];

export const LOYALTY_BLOCKS = [
  {
    src: '/static/img/loyaltyImg_1.png',
    icon: <BoardridersClubLogo />,
    title: 'Программа лояльности',
    description: 'Зарабатывайте баллы и получайте преимущества',
    button: 'Вступить в клуб'
  },
  {
    src: '/static/img/loyaltyImg_2.png',
    icon: <IconMail />,
    title: 'Скидка -10%',
    description: 'За подписку на наши новости',
    inputForm: true
  }
];

export const PRODUCT_DISCOUNT_COMPONENTS_RENDER = [
  {
    type: 'product',
    component: ProductBlock,
    props: { title: 'Новинки', buttonName: 'Показать больше' }
  },
  {
    type: 'discount',
    component: DiscountBlock,
    props: {
      title: 'Название Акции',
      description:
        'Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому.',
      src: '/static/img/discountBlockImg.png'
    }
  },
  {
    type: 'product',
    component: ProductBlock,
    props: { title: 'DC Shoes популярное в коллекции', buttonName: 'Показать больше' }
  }
];
