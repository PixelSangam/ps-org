const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__box--left">
          <h1>Pixel Sangam</h1>
        </div>
        <div className="footer__box--right">
          <div className="contact__options">
            <div className="el-con">
              <img
                className="el-icon"
                src="./images/dialer.png"
                alt="Call Us"
              />
              <span className="el-ct">(+91) 80816-28351,</span>
              <span className="el-ct el-ct2">63923-76261</span>
            </div>
            <div className="el-con">
              <img className="el-icon" src="./images/mail.png" alt="Mail Us" />
              <a href="mailto:officialpixelsangam@gmail.com" className="el-ct">
                officialpixelsangam@gmail.com
              </a>
            </div>
            <div className="el-con">
              <img className="el-icon" src="./images/web.png" alt="Browse Us" />
              <a
                href="https://pixelsangam.in"
                target="_blank"
                className="el-ct"
                rel="noreferrer"
              >
                pixelsangam.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copytext">
        <span className="el-f-txt">
          &copy; 2023 | Made by{" "}
          <a className="el-f-link" href="https://pixelsangam.in">
            PixelSangam
          </a>
          Developers
        </span>
      </div>
    </footer>
  );
};

export default Footer;
