import style from './style.module.scss'; // Подключите файл стилей
import Text from '../../config/text';

const Navigation = () => {
  return (
    <nav className={style['nav']}>
      <ul className={style['nav-list']}>
        <li>
          <a href="#" className={style['nav-link']}>
            {Text.header.firstLayer.shops}
          </a>
        </li>
        <li>
          <a href="#" className={style['nav-link']}>
            {' '}
            {Text.header.firstLayer.help}
          </a>
        </li>
        <li>
          <a href="#" className={style['nav-link']}>
            {Text.header.firstLayer.blog}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
