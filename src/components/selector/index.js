import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import Text from '../../config/text';
import './style.module.scss'; // Подключите файл стилей, если он существует

const Selector = () => {
  // Состояние для хранения выбранного значения
  const [selectedValue, setSelectedValue] = useState(Text.header.selector.brest);

  // Состояние для управления видимостью меню
  const [visible, setVisible] = useState(false);

  // Функция обработки клика на элемент меню
  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setSelectedValue(selectedItem.label.props.children);
    }
    setVisible(false); // Закрыть меню после выбора
  };

  // Функция обработки клика вне меню
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  // Создание элементов меню
  const items = [
    {
      label: <>{Text.header.selector.brest}</>,
      key: '0'
    },
    {
      label: <>{Text.header.selector.grodno}</>,
      key: '1'
    },
    {
      label: <>{Text.header.selector.vitebsk}</>,
      key: '2'
    },
    {
      label: <>{Text.header.selector.minsk}</>,
      key: '3'
    },
    {
      label: <>{Text.header.selector.mogilev}</>,
      key: '4'
    },
    {
      label: <>{Text.header.selector.grodno}</>,
      key: '5'
    }
  ];

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={['click']}
      visible={visible}
      onVisibleChange={handleVisibleChange}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {`${Text.header.firstLayer.location} ${selectedValue}`}
          <DownOutlined
            style={{
              transition: 'transform 0.3s',
              transform: visible ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Selector;
