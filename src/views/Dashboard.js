import React from "react";
import { connect } from 'react-redux';
import { startGetNews, startGetActiveMarkets } from "../actions/general";
import { Link } from "react-router-dom";
import DonutChart from 'react-donut-chart';
import Loading from "../components/Utils/Loader";
import News from "../components/Dashboard/News";
import ActiveMarkets from "../components/Dashboard/ActiveMarkets";
import { HomeChartCard2 } from "../components/Assets/HomeChartCard";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col} from "reactstrap";

class Dashboard extends React.Component {
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
                <div className={this.props.fluid ? "content-fluid dashboard" : "content dashboard"}>
                    {
                        this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <Row>
                        <Col xl="8" lg="7">
                            <Card className="card-plain dashboard-banner">
                                <CardBody>
                                    <Link to="/spot-wallet/balance">
                                        <img src={require("assets/img/dashboard_pic2.png")} className="dashboard-pic2"></img>
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="5">
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
                        <Col xl="8" lg="7">
                            <Row className="justify-content-center">
                                <Col className="col-width-363px">                                    
                                    <Card className="card-plain portfolio">
                                        <CardHeader>
                                            <CardTitle tag="h2">Portfolio</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <Link to="/spot-wallet/balance">
                                                {/* <img src={require("assets/img/dashboard-chart.png")}></img> */}
                                                {/* <HomeChartCard2 data={[390, 400, 410, 430, 470, 500, 530, 560, 590, 610, 640, 670]} /> */}
                                                <DonutChart className="custom-donut"
                                                    data={[{
                                                        label: 'Balance1',
                                                        value: 25
                                                    },
                                                    {
                                                        label: 'Balance2',
                                                        value: 35
                                                    },
                                                    {
                                                        label: 'Balance3',
                                                        value: 20
                                                    },
                                                    {
                                                        label: 'Balance4',
                                                        value: 20, 
                                                    }]
                                                    } 
                                                    legend={false} width={280} height={271} />
                                            </Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <ActiveMarkets activeMarkets={this.state.activeMarkets} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="4" lg="5">
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);