// src/components/navigation/index.js
import React from 'react';
import style from './style.module.scss'; // Подключите файл стилей

const Navigation = ({ links = [] }) => {
  // Дефолтное значение пустого массива
  if (!Array.isArray(links)) {
    console.error('Invalid links prop:', links);
    return null; // Возвращаем null, если links не массив
  }

  return (
    <nav className={style['nav']}>
      <ul className={style['nav-list']}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={style['nav-link']}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
