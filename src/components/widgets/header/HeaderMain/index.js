import React from 'react';
import style from './style.module.scss';
import { buttonsUpperLayer, navigationHeaderMain } from '../config';
import Button from '../../../common/Button';
import Navigation from '../../../common/Navigation';
import IconLogo from '../../../../assets/icons/HeaderLogo';

function HeaderMain() {
  return (
    <div className={style['wrapper']}>
      <div className={style['wrapper-grid']}>
        <Navigation links={navigationHeaderMain} className={style['wrapper-grid__links']} />
        <IconLogo />
        <div className={style['wrapper-grid-buttonsWrapper']}>
          {buttonsUpperLayer.map((item, index) => (
            <Button
              key={index}
              className={style['wrapper-grid-buttonsWrapper--buttonStyles']}
              svg={item.svg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
