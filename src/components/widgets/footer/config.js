import IconStore from '../../../assets/icons/Store';
import IconMarket from '../../../assets/icons/Market';
import IconTelephone from '../../../assets/icons/Telephone';
import IconMail from '../../../assets/icons/Mail';
import IconTwitter from '../../../assets/icons/Twitter';
import IconFacebook from '../../../assets/icons/Facebook';
import IconTwitch from '../../../assets/icons/Twitch';
import IconYouTube from '../../../assets/icons/Youtube';
import IconInstagram from '../../../assets/icons/Instagram';
import style from './FooterReferal/style.module.scss';

export const footerNavigationColumns = [
  {
    title: 'Помощь',
    links: [
      { href: '#', text: 'Доставка' },
      { href: '#', text: 'Оплата' },
      { href: '#', text: 'Возврат' },
      { href: '#', text: 'Отзывы (2290)' },
      { href: '#', text: 'Акции и скидки' }
    ]
  },
  {
    title: 'Компания',
    links: [
      { href: '#', text: 'Контакты' },
      { href: '#', text: 'О boardriders' },
      { href: '#', text: 'Вакансии' },
      { href: '#', text: 'Публичная офферта' }
    ]
  },
  {
    title: 'Boardriders Inc.',
    links: [
      { href: '#', text: 'Франчайзинг' },
      { href: '#', text: 'Quiksilver' },
      { href: '#', text: 'Roxy' },
      { href: '#', text: 'DC Shoes' },
      { href: '#', text: 'Boardriders Club' }
    ]
  }
];

export const footerAppIcons = [IconStore, IconMarket];

export const footerContacts = [
  {
    icon: <IconTelephone />,
    mainText: <a href="tel:+375292420957">+375 (29) 242-09-57</a>,
    text: 'Бесплатная горячая линия Ежедневно с 9 до 21'
  },
  {
    icon: <IconMail />,
    mainText: 'Контактный Email',
    text: 'info@brd.ru'
  }
];

export const footerSocial = [
  { Icon: IconTwitter, href: 'https://twitter.com', title: 'Twitter' },
  { Icon: IconFacebook, href: 'https://facebook.com', title: 'Facebook' },
  { Icon: IconTwitch, href: 'https://twitch.tv', title: 'Twitch' },
  { Icon: IconYouTube, href: 'https://youtube.com', title: 'YouTube' },
  { Icon: IconInstagram, href: 'https://instagram.com', title: 'Instagram' }
];

export const footerRef = [
  { text: 'Подпишись на рассылку и получи' },
  { text: '-10%', className: style['wrapper-content--percent'] },
  { text: 'скидку' }
];
