import React from "react";
import { connect } from 'react-redux';
import { startGetNews, startGetActiveMarkets } from "../actions/general";
import { Link } from "react-router-dom";
import Loading from "../components/Utils/Loader";
import News from "../components/Dashboard/News";
import ActiveMarkets from "../components/Dashboard/ActiveMarkets";
import HomeChartCard from "../components/Assets/HomeChartCard";

import {Card, CardBody, Row, Col} from "reactstrap";
import Scroller from "components/Explore/Scroller";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props.startGetNews();
        this.props.startGetActiveMarkets();
        this.state = {
            news: [],
            activeMarkets: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            news: nextProps.news,
            activeMarkets: nextProps.activeMarkets,
        })
    }
    render() {
        return (
            <>
                <Scroller/>
                <div className={this.props.fluid ? "content-fluid home" : "content home"}>
                    {
                        this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <Row className="justify-content-center">
                        <Col className="custom_col_left">
                            <Link to="/spot-wallet/balance">
                                <img src={require("assets/img/dashboard_pic3.png")} className="dashboard-pic2 dashboard-banner"></img>
                            </Link>
                        </Col>
                        <Col className="custom_col_right">
                            <Link to="/spot-wallet/balance">
                                <img src={require("assets/img/dashboard_pic1.png")} className="dashboard-banner"></img>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="custom_col_left">
                            <Row className="justify-content-center">
                                <Col>
                                    <HomeChartCard data={[390, 400, 410, 430, 470, 500, 530, 560, 590, 610, 640, 670]} />
                                </Col>
                                <Col>
                                    <ActiveMarkets activeMarkets={this.state.activeMarkets} />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <News news={this.state.news} />
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.general.news,
        activeMarkets: state.general.activeMarkets,
        isNewsLoading: state.general.loading,
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetNews: () => dispatch(startGetNews()),
    startGetActiveMarkets: () => dispatch(startGetActiveMarkets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);