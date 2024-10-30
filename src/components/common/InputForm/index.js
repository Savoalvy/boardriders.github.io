import React from 'react';
import style from './style.module.scss';
import { Input } from 'antd';
import classNames from 'classnames';

const InputForm = ({ placeholder, prefix, suffix, rootClassName }) => (
  <>
    <Input
      rootClassName={classNames(rootClassName, style['inputStyles'])}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
    />
  </>
);
export default InputForm;
