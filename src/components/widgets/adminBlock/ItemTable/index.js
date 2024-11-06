import React, { useState } from 'react';
import style from './style.module.scss';
import { Space, Table, Input, Select } from 'antd';
import { DeleteFilled, EditFilled, CopyFilled } from '@ant-design/icons';
import { SLIDER_ITEMS } from '../../content/contentProductBlock/swiperSlider/config';
import Button from '../../../common/Button';

// Пример конфигураций для селектов
const CATEGORY_OPTIONS = ['Электроника', 'Одежда', 'Книги', 'Игрушки'];
const DISCOUNT_OPTIONS = [0, 5, 10, 15, 20, 30, 50]; // Пример скидок
const BRAND_OPTIONS = ['Samsung', 'Apple', 'Sony', 'LG']; // Пример брендов

const missingValues = (item, miss = '-') => {
  return Object.fromEntries(Object.entries(item).map(([key, value]) => [key, value ?? miss]));
};

const dataSource = SLIDER_ITEMS.map((item) =>
  missingValues({
    key: item.id, // предполагается, что у каждого элемента есть уникальный id
    brand: item.name,
    category: item.type,
    startPrice: item.price,
    discount: item.discount,
    endPrice: item.discount ? item.price * (1 - item.discount / 100) : item.price,
    image: item.src,
    onSite: item.onlySite
  })
);

const ItemTable = () => {
  const [editableRowKeys, setEditableRowKeys] = useState([]); // Строки, которые редактируются
  const [data, setData] = useState(dataSource); // Данные для таблицы

  // Переключение режима редактирования для строк
  const toggleEdit = (key) => {
    setEditableRowKeys((prevKeys) =>
      prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [...prevKeys, key]
    );
  };

  // Обработка изменений в инпутах/селектах
  const handleInputChange = (key, field, value) => {
    setData((prevData) =>
      prevData.map((item) => (item.key === key ? { ...item, [field]: value } : item))
    );
  };

  // Столбцы таблицы
  const columns = [
    {
      title: 'Бренд',
      dataIndex: 'brand',
      key: 'brand',
      render: (text, record) =>
        editableRowKeys.includes(record.key) ? (
          <Select
            value={text}
            onChange={(value) => handleInputChange(record.key, 'brand', value)}
            options={BRAND_OPTIONS.map((option) => ({ value: option, label: option }))}
          />
        ) : (
          text
        )
    },
    {
      title: 'Категория товаров',
      dataIndex: 'category',
      key: 'category',
      render: (text, record) =>
        editableRowKeys.includes(record.key) ? (
          <Select
            value={text}
            onChange={(value) => handleInputChange(record.key, 'category', value)}
            options={CATEGORY_OPTIONS.map((option) => ({ value: option, label: option }))}
          />
        ) : (
          text
        )
    },
    {
      title: 'Цена',
      children: [
        {
          title: 'Начальная',
          dataIndex: 'startPrice',
          key: 'startPrice',
          render: (text, record) =>
            editableRowKeys.includes(record.key) ? (
              <Input
                type="number"
                value={text}
                onChange={(e) => handleInputChange(record.key, 'startPrice', e.target.value)}
              />
            ) : (
              text
            )
        },
        {
          title: 'Скидка %',
          dataIndex: 'discount',
          key: 'discount',
          render: (text, record) =>
            editableRowKeys.includes(record.key) ? (
              <Select
                value={text}
                onChange={(value) => handleInputChange(record.key, 'discount', value)}
                options={DISCOUNT_OPTIONS.map((option) => ({ value: option, label: `${option}%` }))}
              />
            ) : (
              text
            )
        },
        {
          title: 'Итоговая',
          dataIndex: 'endPrice',
          key: 'endPrice'
        }
      ]
    },
    {
      title: 'Распродажа',
      dataIndex: 'onSite',
      key: 'onSite',
      render: (text, record) =>
        editableRowKeys.includes(record.key) ? (
          <Input
            type="checkbox"
            checked={text}
            onChange={(e) => handleInputChange(record.key, 'onSite', e.target.checked)}
          />
        ) : (
          text
        )
    },
    {
      title: 'Изображение',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="Товар" />
    },
    {
      title: ' ',
      render: (_, record) => (
        <Space>
          <Button svg={EditFilled} onClick={() => toggleEdit(record.key)} />
          <Button svg={CopyFilled} />
          <Button svg={DeleteFilled} />
        </Space>
      )
    }
  ];

  return (
    <Table
      className={style.tableStyles}
      scroll={{
        x: 'calc(700px + 50%)',
        y: 47 * 5
      }}
      dataSource={data}
      columns={columns}
    />
  );
};

export default ItemTable;
