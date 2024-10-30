import React from 'react';
import style from './style.module.scss';
import classNames from 'classnames';

const Button = ({ svg: SvgComponent, className, onClick, text }) => {
  return (
    <button className={classNames(className, style['button'])} onClick={onClick}>
      {text ? text : <SvgComponent />}
    </button>
  );
};

export default Button;
