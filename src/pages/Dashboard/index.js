import React from 'react';
import style from './style.module.scss';
import Content from '../../components/widgets/content/index';

function Dashboard() {
  return (
    <div className={style['dashboard']}>
      <Content />
    </div>
  );
}

export default Dashboard;
