import React from "react";
import { Container } from "../features";
import {
  address,
  facebook,
  fax,
  footerLogo,
  googleplus,
  instagram,
  linkedin,
  phone,
  pinterest,
  rss,
  twitter,
  youtube,
} from "../../assets/user/footer";
import LinkBtn from "./LinkBtn";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="main">
        <Container className="margins">
          <div className="footer-container">
            <div className="footer_border"></div>

            <div className="footer-container-content">
              <div className="footer-container-content-logo">
                <img src={footerLogo} alt="logo" />
              </div>
              <div className="footer-container-content-contact">
                <div className="contact_Item">
                  <img src={address} alt="icon" />
                  <p>
                    345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                  </p>
                </div>

                <div className="footer-container-content-contact-phone">
                  <div className="contact_Item">
                    <img src={phone} alt="icon" />
                    <p>(123) 456-7890</p>
                  </div>
                  <div className="contact_Item">
                    <img src={fax} alt="icon" />
                    <p>(123) 456-7890</p>
                  </div>
                </div>

                <div className="footer_socialMedia">
                  <p>Social Media</p>

                  <div>
                    <img src={facebook} alt="icon" />
                    <img src={twitter} alt="icon" />
                    <img src={linkedin} alt="icon" />
                    <img src={youtube} alt="icon" />
                    <img src={instagram} alt="icon" />
                    <img src={googleplus} alt="icon" />
                    <img src={pinterest} alt="icon" />
                    <img src={rss} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Border */}
            <div className="footer_border-thin"></div>

            {/* Bottom Part */}
            <div className="footer_bottom">
              <div className="footer_bottom-menu">
                <LinkBtn icon={false} to="/" className="menu">
                  About us
                </LinkBtn>
                <LinkBtn icon={false} to="/" className="menu">
                  Contact us
                </LinkBtn>
                <LinkBtn icon={false} to="/" className="menu">
                  Help
                </LinkBtn>
                <LinkBtn icon={false} to="/" className="menu">
                  Privacy Policy
                </LinkBtn>
                <LinkBtn icon={false} to="/" className="menu">
                  Disclaimer
                </LinkBtn>
              </div>
              <div className="footer_bottom-copy">
                <p>Copyright © 2024 • HSBC</p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
