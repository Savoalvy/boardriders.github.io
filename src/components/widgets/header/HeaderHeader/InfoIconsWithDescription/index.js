import style from './style.module.scss';

const IconsWrapper = ({ SvgComponent, text }) => (
  <div className={style.wrapper}>
    <SvgComponent />
    <span className={style.text}>{text}</span>
  </div>
);

export default IconsWrapper;
