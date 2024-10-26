import React from 'react';
import style from './style.module.scss';
import { Input } from 'antd';
import IconMail from '../../../assets/icons/Mail';
import Button from '../Button';
import IconTelegram from '../../../assets/icons/Telegram';

const InputForm = () => (
  <>
    <Input
      rootClassName={style['inputStyles']}
      placeholder="Email"
      prefix={<IconMail />}
      suffix={<Button className={style['inputStyles__button']} svg={IconTelegram} />}
    />
  </>
);
export default InputForm;
