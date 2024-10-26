import React from 'react';
import style from './style.module.scss';
import Button from '../../../common/Button';
import InputForm from '../../../common/InputForm';
import { LOYALTY_BLOCKS } from '../config';
import IconMail from '../../../../assets/icons/Mail';

const LoyaltyProgram = () => {
  return (
    <div className={style['loyalty']}>
      {LOYALTY_BLOCKS.map((block, index) => (
        <div key={index} className={style['loyalty-block']}>
          <img src={block.image} alt="Картинка" />
          <div className={style['loyalty-block-content']}>
            <div
              className={`${style['loyalty-block-content__icon']} ${
                block.icon.type === IconMail ? style['loyalty-block-content__iconMail'] : ''
              }`}>
              {block.icon}
            </div>
            <span className={style['loyalty-block-content__title']}>{block.title}</span>
            <span className={style['loyalty-block-content__description']}>{block.description}</span>
            {block.button && (
              <Button className={style['loyalty-block-content__button']} text={block.button} />
            )}
            {block.inputForm && <InputForm />}
          </div>
        </div>
      ))}
    </div>
  );
};
export default LoyaltyProgram;
