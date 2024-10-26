import React from 'react';
import style from './style.module.scss';
import Navigation from '../../../common/Navigation';
import { footerNavigationColumns } from '../config';

function FooterNavigation() {
  return (
    <div className={style['wrapper']}>
      {footerNavigationColumns.map((item, index) => (
        <div key={index} className={style['wrapper-column']}>
          <span className={style['wrapper-column__tittle']}>{item.title}</span>
          <Navigation links={item.links} className={style['wrapper-column__links']} />
        </div>
      ))}
    </div>
  );
}

export default FooterNavigation;
