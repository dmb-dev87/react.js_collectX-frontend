import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import {startGetExplores} from "../actions/explore";
import Loading from "../components/Utils/Loader"
import ImageCard from "../components/Assets/ImageCard";
import MJRChartCard from "../components/Assets/MJRChartCard";
import OrderPriceCard from "../components/Assets/OrderPriceCard";
import OrdersTableCard from "../components/Assets/OrdersTableCard";
import RecentOrdersCard from "../components/Assets/RecentOrdersCard";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components

class AssetMJRTrade extends React.Component {
  constructor(props) {
    super(props);
    this.props.startGetExplores();
    this.state = {
      explores: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      explores: nextProps.explores
    })
  }
  render() {
    return (
      <>
        <div className="content-fluid assets-mjr-trade">
          <Row className="header-MJR">
            <Col lg="2">
              <Row className="mjr-title">
                <h1>MJR </h1>
                <h2> / USD</h2>
              </Row>
            </Col>            
            <Col lg="10">
              <Row>
                <div className="sub-field">Last Price:<span className="sub-value">$126.318</span></div>           
                <div className="sub-field">24h High:<span className="sub-value">$128.941</span></div>
                <div className="sub-field ">24h Low:<span className="sub-value color-blue">$121.349</span></div>
                <div className="sub-field">24h Vol:<span className="sub-value color-white">$95,281.45</span></div>
                <Col className="sub-field">
                  <Row className="sub-value-small">$126,318.94</Row>
                  <Row className="sub-value-small-desc">MARKET CAP</Row>
                </Col>
              </Row>              
            </Col>
          </Row>

          <Row>
            <Col sm="12" lg="12" xl="3">
              <div >
                <div className="image-row-card">                  
                  <ImageCard image={require("assets/img/card1.png")} title={"'86 Fleer"} name={"Machael Jordan"} content={"Rookie Card"}></ImageCard>
                </div>
                <div className="image-row-card">
                  <RecentOrdersCard></RecentOrdersCard>
                </div>
              </div>
            </Col>            
            <Col sm="12" lg="12" xl="6">
              <Row>
                <Col>
                  <MJRChartCard ></MJRChartCard>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OrderPriceCard></OrderPriceCard>
                </Col>
              </Row>
            </Col>
            <Col sm="12" lg="12" xl="3">
                <OrdersTableCard></OrdersTableCard>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    explores: state.explore.explores,
    isExploresLoading: state.explore.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startGetExplores: () => dispatch(startGetExplores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetMJRTrade);