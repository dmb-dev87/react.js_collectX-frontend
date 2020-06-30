/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, NavItem, NavLink } from "reactstrap";

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
          <h2>$9193.84</h2>
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