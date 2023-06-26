import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Top">
        <div>
          <h1>Genshin|Hub</h1>
          <p>
            Join Us Today on many platforms Like Youtube , Twitter , Discord and
            Instagram
          </p>
        </div>
        <div>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a href="https://discord.gg/bCcAAZqDyE">
            <i className="fa-brands fa-discord"></i>
          </a>

          <a href="https://www.youtube.com/@kingloopgaming2064">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4> Examples1</h4>
        </div>
        <div>
          <h4> Examples2</h4>
        </div>
        <div>
          <h4> Examples3</h4>
        </div>
        <div>
          <h4> Examples4</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
