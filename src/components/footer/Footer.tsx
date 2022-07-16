import { FC } from "react";
import './Footer.scss'
import footer from './../../assets/img/footer/footer.png'


let Footer:FC = () => {
  return (
    <footer className="footer">
      <img src={footer} alt="" />
    </footer>
  );
}

export default Footer;