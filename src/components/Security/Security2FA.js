/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, NavItem, NavLink } from "reactstrap";

class Security2FA extends React.Component {
  render() {
    return (
      <Col className="security-2fa">
        <Row>
          <h2>2FA</h2>
        </Row>
        <Row>
          <p className="description">
            These are two great ways to enhance security on your account. It's easy to set up and you'll be glade you did.
          </p>
        </Row>
        <Row>
          <Col className="text-left google-auth">
            <div className="google-content">
              <img src={ require("assets/img/security/avt1.png")} ></img>
              <div className="auth-text">
                <h3>Google Authenticator</h3>
                <p>User For Log-in Withdraws</p>
              </div>
              <button className="btn btn-disable">Disable</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-left sms-auth">
            <div className="sms-content">
              <img src={require("assets/img/security/avt2.png")}></img>
              <div className="auth-text">
                <h3>SMS Authenticator</h3>
                <p>User For Log-in Withdraws</p>
              </div>            
              <button className="btn btn-enable">Enable</button>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Security2FA;