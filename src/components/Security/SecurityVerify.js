/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, NavItem, NavLink } from "reactstrap";

class SecurityVerify extends React.Component {
  render() {
    return (
      <Col className="security-verify">
        <Row>
          <h2>Verify Identification</h2>
        </Row>
        <Row>
          <p className="description">Hey, we're CollectX. Who are you?<br />Let's secure your account.</p>
        </Row>
        <Row>
          <Col className="text-left google-auth">
            <div className="google-content">
              <img src={require("assets/img/security/avt3.png")}></img>
              <div className="auth-text">
                <h3>Passport</h3>
                <p>Let's confirm you're form this planet.</p>
              </div>
              <button className="btn btn-add">Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-left sms-auth">
            <div className="sms-content">
              <img src={require("assets/img/security/avt4.png")}></img>
              <div className="auth-text">
                <h3>Personal Information</h3>
                <p>User For Log-in Withdraws</p>
              </div>
              <button className="btn btn-add">Edit</button>
            </div>
          </Col>
        </Row>
        <Col className="subtext-info">
          <Col>
            <Row>
              <img src={require("assets/img/security/check.png")}></img>
              <p>Dallas Rushing</p>
            </Row>
          </Col>
          <Col>
            <Row>
              <img src={require("assets/img/security/check.png")}></img>
              <p>dallas@collectx.exchange</p>
            </Row>
          </Col>
        </Col>
      </Col>
    );
  }
}

export default SecurityVerify;