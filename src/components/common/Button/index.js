import React from 'react';
import style from './style.module.scss';

const Button = ({ svg: SvgComponent, className, onClick, text }) => {
  return (
    <button className={`${style['button']} ${className}`} onClick={onClick}>
      {SvgComponent ? <SvgComponent /> : text}
    </button>
  );
};

export default Button;
