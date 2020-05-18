import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          <a href="https://www.instagram.com/mandar242" target="__blank">
            <i className="fa fa-instagram fa-lg fa-inverse" />
          </a>
          <a href="https://www.github.com/mandar242" target="__blank">
            <i className="fa fa-github fa-lg fa-inverse" />
          </a>
          <a href="https://www.linkedin.com/in/mandar242" target="__blank">
            <i className="fa fa-linkedin fa-lg fa-inverse" />
          </a>
        </div>
        <hr />
        <p className="footer__text">Mandar Kulkarni</p>
      </Container>
    </footer>
  );
};

export default Footer;
