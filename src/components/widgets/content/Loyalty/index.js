import React from 'react';
import style from './style.module.scss';
import Button from '../../../common/Button';
import InputForm from '../../../common/InputForm';
import { LOYALTY_BLOCKS } from '../config';
import IconMail from '../../../../assets/icons/Mail';
import IconTelegram from '../../../../assets/icons/Telegram';

const LoyaltyProgram = () => {
  return (
    <div className={style['loyalty']}>
      {LOYALTY_BLOCKS.map((item, index) => (
        <div key={index} className={style['loyalty-block']}>
          <img src={item.src} alt="Картинка" />
          <div className={style['loyalty-block-content']}>
            <div
              className={`${style['loyalty-block-content__icon']} ${
                item.icon.type === IconMail ? style['loyalty-block-content__iconMail'] : ''
              }`}>
              {item.icon}
            </div>
            <span className={style['loyalty-block-content__title']}>{item.title}</span>
            <span className={style['loyalty-block-content__description']}>{item.description}</span>
            {item.button && (
              <Button className={style['loyalty-block-content__button']} text={item.button} />
            )}
            {item.inputForm && (
              <InputForm
                placeholder="Email"
                prefix={<IconMail />}
                suffix={<Button svg={IconTelegram} />}
                rootClassName={style['loyalty-block-content__input']}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default LoyaltyProgram;
