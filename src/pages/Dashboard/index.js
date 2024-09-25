import React from 'react';
import Header from '../../components/widgets/header/index';
import styles from './style.module.scss';
import Footer from '../../components/widgets/footer/index';
import Content from '../../components/widgets/content/index';

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
