import React from 'react';
import Header from './header/index';
import styles from './styles/App.module.scss';
import Footer from './footer/index';
import Content from './content';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
