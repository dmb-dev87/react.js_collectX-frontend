import React from "react";
import { connect } from 'react-redux';
import { startGetNews } from "../actions/general";
import Loading from "../components/Utils/Loader"

import USD from "../components/Deposit/USD";
import PaymentMethods from "../components/Deposit/PaymentMethods";

// reactstrap components
import {
  Row,
  Col,
  Button,
} from "reactstrap";

// core components

class Deposit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={this.props.fluid ? "content-fluid deposit" : "content deposit"}>
          {
            this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          <Row xl="12" className="withdraw">
            <h2>Deposit</h2>
            <Button className="shape2">
              <i className="icon-withdraw-up" />
              <i className="icon-withdraw-ellipse" />
              <span className="withdraw-deposit-font">Withdraw</span>
            </Button>
          </Row>
          <Row className="head">
            <div>
              <h3>Fiat</h3>
            </div>
          </Row>
          <Row className="payment">
            <Col xl="6" lg="6" lg="12">
              <USD />
            </Col>
            <Col xl="6" lg="6" lg="12">
              <PaymentMethods />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);