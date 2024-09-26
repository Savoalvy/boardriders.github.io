import React from 'react';
import style from './style.module.scss';

const ButtonDefault = ({ text, styles }) => {
  return <button className={`${style['button']} ${styles}`}>{text}</button>;
};

export default ButtonDefault;
