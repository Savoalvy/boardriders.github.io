import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import Text, { mapText } from '../../config/text';
import './style.module.scss'; // Подключите файл стилей, если он существует

const Selector = () => {
  // Состояние для хранения выбранного значения
  const [selectedValue, setSelectedValue] = useState(Text.header.selector.brest);

  // Состояние для управления видимостью меню
  const [open, setOpen] = useState(false);

  // Использование mapText для создания элементов меню
  const items = mapText(Text.header.selector);

  // Функция обработки клика на элемент меню
  const handleMenuClick = (e) => {
    // Использование `text` как ключа для поиска выбранного элемента
    const selectedItem = items.find((item) => item.text === e.key);
    if (selectedItem) {
      setSelectedValue(selectedItem.text);
    }
    setOpen(false); // Закрыть меню после выбора
  };

  // Функция обработки изменения состояния открытия меню
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  // Создание меню
  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.text}>{item.text}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} open={open} onOpenChange={handleOpenChange}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {`${Text.header.firstLayer.location} ${selectedValue}`}
          <DownOutlined
            style={{
              transition: 'transform 0.3s',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Selector;
