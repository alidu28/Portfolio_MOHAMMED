import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
library.add(
  faPhone,
  faEnvelope,
  faLocationDot,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn
);

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <h1>CONTACT</h1>
        <div className="footer-contain">
          <div className="footer-left">
            <h2>Drop Me a Message</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              impedit voluptates explicabo quia iste dolorem cumque vitae,
              accusantium non debitis?
            </p>

            <div className="contact-info">
              <span className="footer-icons">
                <FontAwesomeIcon icon={faPhone} id="icon" />
              </span>
              <p>+91 1234567890</p>
            </div>

            <div className="contact-info">
              <span className="footer-icons">
                <FontAwesomeIcon icon={faEnvelope} id="icon" />
              </span>
              <p>mugabejunior5@gmail.com</p>
            </div>

            <div className="contact-info">
              <span className="footer-icons">
                <FontAwesomeIcon icon={faLocationDot} id="icon" />
              </span>
              <p>Loc. Da abra street</p>
            </div>
          </div>

          <div className="footer-right">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
            <button className="btn send">Send</button>
          </div>
        </div>
        <hr />
        <div className="bottom-contain">
          <div className="bottom-left">
            <h1 className="logo">MOHAMMED</h1>
          </div>

          <div className="bottom-center">
            <p>Copyright &copy; 2024. All Rights Reserved</p>
          </div>

          <div className="bottom-right">
            <span className="footer-icons">
              <FontAwesomeIcon icon={faFacebookF} id="icon" />
            </span>
            <span className="footer-icons">
              <FontAwesomeIcon icon={faInstagram} id="icon" />
            </span>
            <span className="footer-icons">
              <FontAwesomeIcon icon={faWhatsapp} id="icon" />
            </span>
            <span className="footer-icons">
              <FontAwesomeIcon icon={faLinkedinIn} id="icon" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
