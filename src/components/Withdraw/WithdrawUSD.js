/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, NavItem, NavLink } from "reactstrap";

class WithdrawUSD extends React.Component {
  render() {
    return (
      <Col className="usd">
        <Row className="sec">
          <img src={require("assets/img/deposit/bitcoin_logo.png")} ></img>
          <h2>USD</h2>
          <h3>US Dollar</h3>
        </Row>
        <Row className="usd-visa">
          <img src={require("assets/img/deposit/visa.png")}></img>
          <div className="card-text">
            <h3>Dallas I Rushing</h3>
            <p>XXXX XXXX XXXX 9232</p>
          </div>
          <img className="type-item" src={require("assets/img/withdraw/rushing.png")}></img>
        </Row>
        <Row className="usd-amount">
          <h4 className="amount">Amount</h4>
          <h5 className="max">MAX</h5>
        </Row>
        <Row className="usd-minimum">
          <div className="minimum-left">
            <h4 className="amount">Minimum:&nbsp;&nbsp;</h4>
            <h5 className="max">$10 USD</h5>
          </div>
          <div className="minimum-right">
            <h4 className="amount">Available:&nbsp;&nbsp;</h4>
            <h5 className="max">$9,193.84</h5>
          </div>
        </Row>
        <Row className="usd-trans">
          <div>
            <h4 className="trans-item">Transaction Fee:&nbsp;&nbsp;</h4>
            <h5 className="value-item">$1.50 USD</h5>
          </div>
          <div>
            <h4 className="trans-item">You'll Receive:&nbsp;&nbsp;</h4>
            <h5 className="value-item">0.00 USD</h5>
          </div>
        </Row>
        <Row>
          <button className="btn btn-submit">Submit</button>
        </Row>
      </Col>
    );
  }
}

export default WithdrawUSD;