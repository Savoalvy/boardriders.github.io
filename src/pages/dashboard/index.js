import React from 'react';
import Header from '../../header/index';
import styles from './style.module.scss';
import Footer from '../../footer/index';
import Content from '../../content/index';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Dashboard;
