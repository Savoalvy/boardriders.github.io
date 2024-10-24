import style from './style.module.scss';
import loyalty_1 from '../../../../assets/img/loyaltyImg_1.png';
import loyalty_2 from '../../../../assets/img/loyaltyImg_2.png';
import ButtonDefault from '../../../common/ButtonDefault';
import InputForm from '../../../common/InputForm';
import BoardridersClubLogo from '../../../../assets/icons/BoardridersClubLogo';
import IconMail from '../../../../assets/icons/Mail';

const LoyaltyProgram = () => {
  return (
    <div className={style['loyalty']}>
      <div className={style['loyalty-block']}>
        <img src={loyalty_1} alt="Картинка" />
        <div className={style['loyalty-block-content']}>
          <div className={style['loyalty-block-content__iconBoardriders']}>
            <BoardridersClubLogo />
          </div>
          <span className={style['loyalty-block-content__title']}>Программа лояльности</span>
          <span className={style['loyalty-block-content__description']}>
            Зарабатывайте баллы и получайте преимущества
          </span>
          <ButtonDefault text={'Вступить в клуб'} />
        </div>
      </div>
      <div className={style['loyalty-block']}>
        <img src={loyalty_2} alt="Картинка" />
        <div className={style['loyalty-block-content']}>
          <div className={style['loyalty-block-content__iconMail']}>
            <IconMail />
          </div>
          <span className={style['loyalty-block-content__title']}>Скидка -10%</span>
          <span className={style['loyalty-block-content__description']}>
            За подписку на наши новости
          </span>
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
