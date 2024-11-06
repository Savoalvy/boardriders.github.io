import React from 'react';
import style from './style.module.scss';
import ItemTable from './ItemTable';

function AdminBlock() {
  console.log('Admin rendered');
  return (
    <div className={style['wrapper']}>
      <ItemTable />
    </div>
  );
}

export default AdminBlock;
