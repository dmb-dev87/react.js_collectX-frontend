/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="main-content">
            <div className="footer-content">
              <div className="angery">
                <div className="footer-menu">
                  <img alt="..." src={require("assets/img/collectx-logo.svg")} style={{width: '160px'}} />
                  <div class="line"></div>
                </div>
                <div>
                  <dl className="footer-menu">
                    <h1>About Us</h1>
                    <dt><a href="#">About</a></dt>
                    <dt><a href="#">Careers</a></dt>
                    <dt><a href="#">Community</a></dt>
                    <dt><a href="#">Terms</a></dt>
                    <dt><a href="#">Privacy</a></dt>
                    <dt><a href="#">Announcements</a></dt>
                  </dl>
                </div>
                <div>
                  <dl className="footer-menu">
                    <h1>Learn</h1>
                    <dt><a href="#">How it works</a></dt>
                    <dt><a href="#">Why 1,000 Tokens</a></dt>
                    <dt><a href="#">Buy Bitcoin</a></dt>
                    <dt><a href="#">Sell Asset To CollectX</a></dt>
                  </dl>
                </div>
                <div>
                  <dl className="footer-menu">
                    <h1>Support</h1>
                    <dt><a href="#">FAQ</a></dt>
                    <dt><a href="#">Support Center</a></dt>
                    <dt><a href="#">Submit Request</a></dt>
                    <dt><a href="#">API Documents</a></dt>
                  </dl>
                </div>
                <div>
                  <dl className="footer-menu">
                    <h1>Community</h1>
                    <dt><img className="tim-imgs" src={require("assets/img/logo/logo-karma.svg")}></img><img className="tim-imgs" src={require("assets/img/socials/twitter.svg")}></img><img className="tim-imgs" src={require("assets/img/socials/facebook.svg")}></img><img className="tim-imgs" src={require("assets/img/socials/telegram.svg")}></img></dt>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            CollectX.Exchange All Rights Reserved
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
