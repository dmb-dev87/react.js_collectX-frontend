/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, NavItem, NavLink } from "reactstrap";

class PaymentMethods extends React.Component {
  render() {
    return (
      <Col className="paymentmethods">
        <Row className="sec">
          <h2>Payment Method</h2>
        </Row>
        <Row className="description">
          <p>Easily & securely add a debit card or bank account.</p>
        </Row>
        <Row className="visa-card">
          <img src={require("assets/img/deposit/visa.png")}></img>
          <div className="card-text">
            <h3>Dallas I Rushing</h3>
            <p>XXXX XXXX XXXX 9232</p>
          </div>            
          <button className="btn btn-edit">Edit</button>
        </Row>
        <Row className="hbs-card">
          <img src={require("assets/img/deposit/hbc.png")}></img>
          <div className="card-text">
            <h3>Bank Account</h3>
            <p>XXXX XXXX XXXX 2437</p>
          </div>            
          <button className="btn btn-edit">Edit</button>
        </Row>
        <Row className="method">
          <button className="btn btn-add">Add Payment Method</button>
        </Row>
      </Col>
    );
  }
}

export default PaymentMethods;