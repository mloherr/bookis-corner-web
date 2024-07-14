import logo from '../images/logo.png';
import web from '../images/web.svg';

function Footer() {
  return (
    <footer className="footer">
      <figure className="footer__imageContainer">
        <img src={logo} alt="Branding logotype image" />
      </figure>
      <figure className="footer__imageContainer">
        <a href="https://soymarialoherr.com/" target="_blank">
          <img src={web} alt="Icon web image" />
        </a>
      </figure>
    </footer>
  );
}

export default Footer;
