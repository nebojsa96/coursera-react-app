import './Footer.css';
import logo from '../assets/images/Asset 14@4x.png';

function Footer() {
  return (
      <footer>
            <div className="footer-left">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-right"><span>Copyright © 2024 Little Lemon - All rights reserved</span></div>

      </footer>
  );
}

export default Footer;
