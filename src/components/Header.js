import './Header.css';
import logo from '../assets/images/Asset 16@4x.png';
import Nav from './Nav';

function Header() {
  return (
      <header>
          <img src={logo} alt="logo"/>
          <Nav />
      </header>
  );
}

export default Header;
