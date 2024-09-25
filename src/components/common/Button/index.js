import React from 'react';
import style from './style.module.scss';

const Button = ({ svg: SvgComponent }) => {
  return (
    <button className={style.button}>
      <SvgComponent />
    </button>
  );
};

export default Button;
