import React from 'react';
import style from './style.module.scss';
import { footerSocial } from '../config';

const FooterSocial = () => (
  <div className={style['footerSocial']}>
    {footerSocial.map(({ index, Icon, href, title }) => (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer" title={title}>
        <Icon />
      </a>
    ))}
  </div>
);

export default FooterSocial;
