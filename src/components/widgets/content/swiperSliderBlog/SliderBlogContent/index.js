import React from 'react';
import style from './style.module.scss';

const SliderBlogContent = ({ iframe, type, title, content }) => {
  return (
    <div className={style['blog']}>
      <div className={style['blog-movie']}>{iframe}</div>
      <div className={style['blog-info']}>
        <div className={style['blog-info__blogs']}>
          <span className={style['blog-info__blogs--name']}>{type}</span>
          <a className={style['blog-info__blogs--allLink']} href="/">
            Все блоги
          </a>
        </div>
        <div className={style['blog-info__content']}>
          <span className={style['blog-info__content--title']}>{title}</span>
          <span className={style['blog-info__content--description']}>{content}</span>
        </div>
        <div className={style['blog-info__readAll']}>
          <div className={style['blog-info__readAll--elementLink']}></div>
          <a className={style['blog-info__readAll--link']} href="/">
            Читать продолжение
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderBlogContent;
