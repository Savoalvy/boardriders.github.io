import React from 'react';
import style from './style.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Button = ({ svg: SvgComponent, className, onClick, text, link }) => {
  const navigate = useNavigate();

  const clicked = () => (link ? navigate(link) : onClick());

  return (
    <button className={classNames(className, style['button'])} onClick={clicked}>
      {text || <SvgComponent />}
    </button>
  );
};

export default Button;
