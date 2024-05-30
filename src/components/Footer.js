import "./Footer.css";
import logo from "../assets/images/Asset 18@4x.png";

function Footer() {
  return (
    <footer>
      <div className="footer-col">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-col">
        <ul>
          <li className="section-category ">Dormant Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-col">
        <ul>
          <li className="section-category ">Contact</li>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer-col">
        <ul>
          <li className="section-category ">Social Media Links</li>
          <li>Youtube</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
