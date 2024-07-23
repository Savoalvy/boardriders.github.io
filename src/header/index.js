import style from './style.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <div className={style['first-layer']}>
        <div className={style['content-width']}>2</div>
      </div>
      <div className={style['second-layer']}>
        <div className={style['content-width']}>2</div>
      </div>
      <div className={style['third-layer']}>
        <div className={style['content-width']}>2</div>
      </div>
    </div>
  );
}

export default Header;
