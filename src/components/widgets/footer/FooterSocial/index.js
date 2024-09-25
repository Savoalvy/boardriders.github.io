import React from 'react';
import style from './style.module.scss';
import IconTwitter from '../../../../assets/icons/Twitter';
import IconFacebook from '../../../../assets/icons/Facebook';
import IconTwitch from '../../../../assets/icons/Twitch';
import IconYouTube from '../../../../assets/icons/Youtube';
import IconInstagram from '../../../../assets/icons/Instagram';

const socialItems = [
  {
    name: 'Twitter',
    Icon: IconTwitter,
    href: 'https://twitter.com',
    ariaLabel: 'Twitter'
  },
  {
    name: 'Facebook',
    Icon: IconFacebook,
    href: 'https://facebook.com',
    ariaLabel: 'Facebook'
  },
  { name: 'Twitch', Icon: IconTwitch, href: 'https://twitch.tv', ariaLabel: 'Twitch' },
  {
    name: 'YouTube',
    Icon: IconYouTube,
    href: 'https://youtube.com',
    ariaLabel: 'YouTube'
  },
  {
    name: 'Instagram',
    Icon: IconInstagram,
    href: 'https://instagram.com',
    ariaLabel: 'Instagram'
  }
];

const Footer__social = () => (
  <div className={style['footerSocial']}>
    {socialItems.map(({ name, Icon, href, ariaLabel }) => (
      <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        <Icon />
      </a>
    ))}
  </div>
);

export default Footer__social;
