import React from "react";
import { connect } from 'react-redux';
import { startGetNews } from "../actions/general";
import Loading from "../components/Utils/Loader";
import { Link } from "react-router-dom";
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
            <Link to="/spot-wallet/withdraw">
            <Button className="shape2">
              <img src={ require("assets/img/deposit/arrow_up.png") } alt="ok" className="arrow_icon"/>
              <span className="withdraw-deposit-font">Withdraw</span>
            </Button>
            </Link>
          </Row>
          <Row className="head">
            <div>
              <h3>Fiat</h3>
            </div>
          </Row>
          <Row className="payment">
            <Col xl="6" lg="12">
              <USD />
            </Col>
            <Col xl="6" lg="12">
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