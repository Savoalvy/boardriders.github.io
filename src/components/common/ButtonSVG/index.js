import React from 'react';
import style from './style.module.scss';

const Button = ({ svg: SvgComponent, className }) => {
  return (
    <button className={`${style['button']} ${className}`}>
      <SvgComponent />
    </button>
  );
};

export default Button;
