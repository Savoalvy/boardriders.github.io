import React from 'react';
import style from './style.module.scss';
import IconTwitter from '../../components/img/footer/twitter';
import IconFacebook from '../../components/img/footer/facebook';
import IconTwitch from '../../components/img/footer/twitch';
import IconYouTube from '../../components/img/footer/youtube';
import IconInstagram from '../../components/img/footer/instagram';
import Text from '../../config/text';

const socialItems = [
  {
    name: 'Twitter',
    Icon: IconTwitter,
    href: Text.footer.socialLinks.twitter,
    ariaLabel: 'Twitter'
  },
  {
    name: 'Facebook',
    Icon: IconFacebook,
    href: Text.footer.socialLinks.facebook,
    ariaLabel: 'Facebook'
  },
  { name: 'Twitch', Icon: IconTwitch, href: Text.footer.socialLinks.twitch, ariaLabel: 'Twitch' },
  {
    name: 'YouTube',
    Icon: IconYouTube,
    href: Text.footer.socialLinks.youtube,
    ariaLabel: 'YouTube'
  },
  {
    name: 'Instagram',
    Icon: IconInstagram,
    href: Text.footer.socialLinks.instagram,
    ariaLabel: 'Instagram'
  }
];

const Footer__social = () => (
  <div className={style['footer__social']}>
    {socialItems.map(({ name, Icon, href, ariaLabel }) => (
      <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        <Icon />
      </a>
    ))}
  </div>
);

export default Footer__social;
