import style from './style.module.scss';
import Slider from '../components/carousel/index';

function Content() {
  return (
    <div className={style.content}>
      <Slider />
    </div>
  );
}

export default Content;
