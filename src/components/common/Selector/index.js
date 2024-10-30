import React from 'react';
import { ConfigProvider, Select } from 'antd';
import style from './style.scss';
import { citys } from './config';

const labelRender = (props) => {
  const { label, value } = props;

  const prefixText = 'Ваш регион доставки: ';

  if (label) {
    return (
      <span>
        {prefixText}
        {value}
      </span>
    );
  }
  return (
    <span>
      {prefixText}
      {citys[0].value}
    </span>
  );
};
const Selector = () => (
  <ConfigProvider
    theme={{
      token: {
        colorBgContainer: '#000000', // Черный фон основного поля
        colorBgElevated: '#000000', // Черный фон выпадающего списка
        colorTextPlaceholder: '#ffffff', // Белый текст плейсхолдера
        colorText: '#ffffff', // Белый текст в основном поле
        controlItemBgActive: '#333333', // Фон активного элемента в выпадающем списке
        colorTextDescription: '#ffffff' // Белый текст в опциях
      }
    }}>
    <Select
      className={style['selector']}
      labelRender={labelRender}
      defaultValue="1"
      options={citys}
      bordered={false}
    />
  </ConfigProvider>
);

export default Selector;
