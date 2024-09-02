import React from 'react';
import style from './style.module.scss'; // Подключите файл стилей

const Navigation = ({ links, navClassName, navLinkClassName, ulClassName }) => {
  console.log('ClassName:', navClassName); // Для отладки
  return (
    <nav className={`${style.nav} ${navClassName}`}>
      <ul className={`${style['nav-list']} ${ulClassName}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={`${style['nav-link']} ${navLinkClassName}`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
