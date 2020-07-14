import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Loading from "../components/Utils/Loader"
import WithdrawUSD from "../components/Withdraw/WithdrawUSD"
import WithdrawPaymentMethods from "../components/Withdraw/WithdrawPaymentMethods"

// reactstrap components
import {
  Row,
  Col,
  Button,
} from "reactstrap";

// core components

class Withdraw extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <div className={this.props.fluid ? "content-fluid withdraw" : "content withdraw"}>
          {
            this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          <Row className="titlepad">
            <h2>Withdraw</h2>
            <Link to="/spot-wallet/deposit">
            <Button className="shape1">
              <img src={ require("assets/img/deposit/arrow_down.png") } alt="ok" className="arrow_icon"/> 
              <span className="withdraw-deposit-font">Deposit</span>
            </Button>
            </Link>
          </Row>
          <Row className="estimated">
            <div>
              <p>Estimated Balance:</p>
              <div>
                <h2 className="amount">$9,193.84</h2>
                <h4>USD</h4>
              </div>
            </div>
          </Row>
          <Row className="payment">
            <Col xl="6" lg="12" sm="12">
              <WithdrawUSD />
            </Col>
            <Col xl="6" lg="12" sm="12">
              <WithdrawPaymentMethods />
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

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);