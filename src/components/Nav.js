import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/" className="nav-item">Menu</Link>
        </li>
        <li>
          <Link to="/booking" className="nav-item">Reservations</Link>
        </li>
        <li>
          <Link to="/" className="nav-item">Order Online</Link>
        </li>
        <li>
          <Link to="/" className="nav-item">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
