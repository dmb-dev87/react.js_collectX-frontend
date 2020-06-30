/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, NavItem, NavLink } from "reactstrap";

class SecurityPad extends React.Component {
  render() {
    return (
        <Col className="pad">
          <Row>
            <h2>Increase Security</h2>
            <div className="btn-group">
              <div className="card-icon">
                <div className="card-image">
                  <img src={ require("assets/img/security/ok.png") } alt="ok" />
                </div>
                <h4>Enable 2FA</h4>
              </div>
              <div className="card-icon">
                <div className="card-image">
                  <img src={ require("assets/img/security/no.png") } alt="no" />
                </div>
                <h4>Enable SMS</h4>
              </div>
              <div className="card-icon">
                <div className="card-image">
                  <img src={ require("assets/img/security/no.png") } alt="no" />
                </div>
                <h4>Passport</h4>
              </div>
              <div className="card-icon">
                <div className="card-image">
                  <img src={ require("assets/img/security/ok.png") } alt="ok" />
                </div>
                <h4>Personal Info</h4>
              </div>
            </div>
          </Row>
        </Col>
    );
  }
}

export default SecurityPad;