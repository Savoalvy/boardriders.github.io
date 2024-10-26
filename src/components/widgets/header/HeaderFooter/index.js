import React from 'react';
import style from './style.module.scss';
import Navigation from '../../../common/Navigation';
import { navigationUnderLayer } from '../config';

function HeaderFooter() {
  return (
    <div className={style['wrapper']}>
      <div className={style['wrapper-grid']}>
        <Navigation links={navigationUnderLayer} className={style['wrapper-grid__links']} />
      </div>
    </div>
  );
}

export default HeaderFooter;
