import React from 'react';
import style from './style.module.scss';

const Button = ({ svg: SvgComponent, className, onClick }) => {
  return (
    <button className={`${style['button']} ${className}`} onClick={onClick}>
      <SvgComponent />
    </button>
  );
};

export default Button;
