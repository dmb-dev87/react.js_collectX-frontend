/*eslint-disable*/
import React from "react";

// reactstrap components
import {Row, Col } from "reactstrap";

class USD extends React.Component {
  render() {
    return (
      <Col className="usd">
        <Row className="sec">
          <img src={require("assets/img/deposit/bitcoin_logo.png")} ></img>
          <h2>USD</h2>
          <h3>US Dollar</h3>
        </Row>
        <Row className="description">
          <p>
            Current Fiat Balance:
          </p>
        </Row>
        <Row className="amount">
          <h2>$9,193.84</h2>
          <h4>USD</h4>
        </Row>
        <Row>
          <button className="btn btn-add">Add Balance</button>
        </Row>
      </Col>
    );
  }
}

export default USD;