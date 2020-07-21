import React from "react";
import { connect } from 'react-redux';
import { startGetNews, startGetActiveMarkets } from "../actions/general";
import { Link } from "react-router-dom";
import Loading from "../components/Utils/Loader";
import News from "../components/Dashboard/News";
import ActiveMarkets from "../components/Dashboard/ActiveMarkets";
import HomeChartCard from "../components/Assets/HomeChartCard";

import {Card, CardBody, Row, Col} from "reactstrap";

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
                <div className={this.props.fluid ? "content-fluid home" : "content home"}>
                    {
                        this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <Row>
                        <Col xl="9" lg="7">
                            <Card className="card-plain dashboard-banner">
                                <CardBody>
                                    <Link to="/spot-wallet/balance">
                                        <img src={require("assets/img/dashboard_pic2.png")} className="dashboard-pic2"></img>
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" lg="5">
                            <Card className="card-plain dashboard-banner">
                                <CardBody>
                                    <Link to="/spot-wallet/balance">
                                        <img src={require("assets/img/dashboard_pic1.png")}></img>
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="9" lg="7">
                            <Row>
                                <Col xl="5" lg="12">
                                    <div className="chart-row-card">
                                        <HomeChartCard data={[390, 400, 410, 430, 470, 500, 530, 560, 590, 610, 640, 670]} />
                                    </div>
                                </Col>
                                <Col xl="7" lg="12">
                                    <ActiveMarkets activeMarkets={this.state.activeMarkets} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="3" lg="5">
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