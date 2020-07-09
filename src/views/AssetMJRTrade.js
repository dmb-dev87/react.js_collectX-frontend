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
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
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
            <h1 className="mjr-title">MJR</h1>
            <Col> <div className="sub-field">Last Price:<div className="sub-value">$126.318</div> </div></Col>
            <Col> <div className="sub-field">24h High:<div className="sub-value">$128.941</div></div></Col>
            <Col> <div className="sub-field">24h Low:<div className="sub-value">$121.349</div></div></Col>
            <Col> <div className="sub-field">24h Vol:<div className="sub-value">$95,281.45</div></div></Col>
            <Col> <div className="sub-field">24h Vol:<div className="sub-value">$95,281.45</div></div></Col>
            <Col> <div className="sub-value-small">$95,281.45</div><div className="sub-value-small-desc">MARKET CAP</div></Col>
          </Row>

          <Row className="content">
            <Col sm="3" lg="3" xl="3">
              <div >
                <div className="image-row-card">
                  <ImageCard image={require("assets/img/card1.png")} title={"'86 Fleer"} name={"Machael Jordan"} content={"Rookie Card"}></ImageCard>
                </div>
                <div className="image-row-card">
                  <RecentOrdersCard></RecentOrdersCard>
                </div>
              </div>
            </Col>
            
            <Col sm="5" lg="5" xl="5">
              <div >
                <div className="image-row-card">
                  <MJRChartCard ></MJRChartCard>
                </div>
                <div className="image-row-card">
                  <OrderPriceCard></OrderPriceCard>
                </div>
              </div>
            </Col>
            
            <Col sm="4" lg="4" xl="4">
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