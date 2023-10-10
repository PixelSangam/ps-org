import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <video autoPlay loop muted className="header__video">
        <source src="./images/header_video.mp4" type="video/mp4" />
      </video>
      <div className="header__content">
        <div className="header__content--thing">
          <h1>Pixel Sangam</h1>
          <p>
            Your digital partner for cutting-edge solutions! From sleek app
            development to responsive web design, we craft tailored digital
            experiences
          </p>
          <Link to="contact" className="el-cb" type="button">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
