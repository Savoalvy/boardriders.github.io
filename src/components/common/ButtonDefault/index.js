import React from 'react';
import style from './style.module.scss';

const ButtonDefault = ({ text, styles }) => {
  return <button className={`${styles} ${style['button']}`}>{text}</button>;
};

export default ButtonDefault;
