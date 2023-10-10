import { Link } from "react-router-dom";
import Heading from "../componenets/Heading";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <main className="contact__section">
        <Heading headingText={"Contact Us"} />
        <div className="contact__container">
          <div className="contact__page">
            <ContactForm />
            <ConnectContainer />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;

const ContactForm = () => {
  return (
    <div className="formContainer contact__page--box">
      <div className="formContainer__title">
        <h2>Send us a message</h2>
      </div>
      <form className="form">
        <input
          type="text"
          name="name"
          className="form__input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          className="form__input"
          required
          placeholder="Your Email"
        />
        <input
          type="number"
          name="phone"
          className="form__input"
          placeholder="Your Phone"
          required
        />
        <textarea
          name="message"
          className="form__textarea form__input"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="form__button">
          Send Message
        </button>
      </form>
    </div>
  );
};

const ConnectContainer = () => {
  return (
    <div className="connectContainer contact__page--box">
      <div className="cbox">
        <div className="formContainer__title">
          <h2>Visit Us</h2>
        </div>
        <div className="cbox__in">
          <div className="cbox__in--type">
            <i className="el-icons fa-solid fa-location-dot"></i>
            <span className="el-clink">
              <Link to=".">ADA Colony, Naini, Prayagraj, 211008</Link>
            </span>
          </div>

          <div className="cbox__in--type">
            <i className="el-icons fa-solid fa-location-dot"></i>
            <span className="el-clink">
              <Link to=".">Teliyarganj, Prayagraj, 211004</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="cbox">
        <div className="formContainer__title">
          <h2>Mail Us</h2>
        </div>
        <div className="cbox__in">
          <div className="cbox__in--type">
            <i className="el-icons fa-solid fa-envelope"></i>
            <span className="el-clink">
              <a href="mailto:OfficialPixelSangam@gmail.com">
                OfficialPixelSangam@gmail.com
              </a>
            </span>
          </div>

          <div className="cbox__in--type">
            <i className="el-icons fa-solid fa-envelope"></i>
            <span className="el-clink">
              <a href="mailto:localhost.webcoder@gmail.com">
                localhost.webcoder@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="cbox">
        <div className="formContainer__title">
          <h2>Call Us</h2>
        </div>
        <div className="cbox__in">
          <div className="cbox__in--type">
            <i className="el-icons fa-solid fa-phone"></i>
            <span className="el-clink">(+91) 808 162 8351</span>
          </div>

          <div className="cbox__in--type">
            <i className="el-icons fa-solid fa-phone"></i>
            <span className="el-clink">(+91) 639 237 6261</span>
          </div>
        </div>
      </div>

      <div className="cbox">
        <div className="formContainer__title">
          <h2>Follow Us</h2>
        </div>
        <div className="cbox__in">
          <Link to=".">
            <i class="el-social-icons fa-brands fa-linkedin"></i>
          </Link>
          <Link to=".">
            <i className="el-social-icons fa-brands fa-square-facebook"></i>
          </Link>
          <Link to=".">
            <i className="el-social-icons fa-brands fa-square-instagram"></i>
          </Link>
          <Link to=".">
            <i class="el-social-icons fa-brands fa-square-youtube"></i>
          </Link>
          <Link to=".">
            <i class="el-social-icons fa-brands fa-square-x-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
