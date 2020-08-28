import React from "react";
import { connect } from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import { startGetExplores } from "../actions/explore";
import Loading from "../components/Utils/Loader"
import ImageCard from "../components/Assets/ImageCard";
import MJRChartCard from "../components/Assets/MJRChartCard";
import OrderPriceCard from "../components/Assets/OrderPriceCard";
import OrdersTableCard from "../components/Assets/OrdersTableCard";
import RecentOrdersCard from "../components/Assets/RecentOrdersCard";

import { Link } from "react-router-dom";
import {useLocation, withRouter} from "react-router-dom";

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
        
        const { location } = this.props;     
        console.log(location);
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
                                    <span className="sub-value-small">$126,318.94</span>
                                    <span className="sub-value-small-desc">MARKET CAP</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center"c>
                        <Col className="mjr-side">
                            <div className="justify-content-center">
                                <Link to={{ pathname: '/assets/detail', image: location.image, name: location.name, content: location.content }}>
                                {   
                                    location.image ? <ImageCard image={location.image} title={"'86 Fleer"} name={location.name} content={location.content}></ImageCard>                            
                                    :<ImageCard image={require("assets/img/card1.png")} title={"'86 Fleer"} name={"Michael Jordan"} content={"Rookie Card"}></ImageCard>                            
                                }     
                                </Link>                                          
                            </div>
                            <div className="justify-content-center">
                                <RecentOrdersCard></RecentOrdersCard>
                            </div>
                        </Col>
                        <Col>
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
                        <Col className="mjr-side">
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter (AssetMJRTrade) );