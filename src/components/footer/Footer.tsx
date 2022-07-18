import { FC } from "react";
import './Footer.scss'
import logo from './../../assets/img/footer/logo_footer.png'
import social from './../../assets/img/footer/social.png'



let Footer:FC = () => {
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="feedback">
          <form className="feedback__form">
            <div className="feedback__inputs-container">
              <input 
                type="text" 
                className="feedback__input"
                placeholder='Ваше имя'
              />
              <input 
                type="text" 
                className="feedback__input"
                placeholder='Ваш телефон'
              />
              <button 
                className="feedback__button button button--primary"
                type="submit"
              > Заказать звонок
              </button>
            </div>
            <p className="feedback__privacy">
            Нажимая на кнопку вы соглашаетесь с <br/> <a href="#"> политикой конфиденциальности </a>
            </p>
          </form>
        </div>
        <div className="footer__nav">
          <div className="footer__up-row">
            <div className="footer__logo">
              <img src={logo} alt=""/>
            </div>
            <ul className="footer__links">
              <div className="footer__links-left">
                <li className="footer__link"> <a href=""> Металлоконструкции</a> </li>
                <li className="footer__link"> <a href=""> Порошковая покраска</a> </li>
              </div>
              <div className="footer__links-right">
                <li className="footer__link"> <a href="">  Фасадные конструкции</a></li>
                <li className="footer__link"> <a href=""> Светопрозрачные конструкции</a> </li>
              </div>
            </ul>
            <div className="footer__contacts">
              <p>+7(499) 380-78-90</p>
              <a href="#">info@bastion.pro</a>
            </div>
          </div>
          <div className="footer__down-row">
            <p> © 2020 Все права защещены | Политика конфиденциальности </p>
            <div className="footer__social">
              <img src={social} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;