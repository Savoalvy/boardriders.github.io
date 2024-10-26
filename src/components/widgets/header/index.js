import React from 'react';
import style from './style.module.scss';
import HeaderHeader from './HeaderHeader';
import HeaderMain from './HeaderMain';
import HeaderFooter from './HeaderFooter';

function Header() {
  return (
    <header className={style['header']}>
      <HeaderHeader />
      <HeaderMain />
      <HeaderFooter />
    </header>
  );
}

export default Header;
