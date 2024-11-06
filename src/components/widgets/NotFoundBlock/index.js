import style from './style.module.scss';
import Button from '../../../components/common/Button';
import notFoundConfig from './config';

function NotFound() {
  return (
    <div className={style['wrapper']}>
      <span className={style['wrapper-error']}>{notFoundConfig.errorCode}</span>
      <span className={style['wrapper-description']}>{notFoundConfig.description}</span>
      <Button
        className={style['wrapper-button']}
        text={notFoundConfig.text}
        link={notFoundConfig.link}
      />
    </div>
  );
}

export default NotFound;
