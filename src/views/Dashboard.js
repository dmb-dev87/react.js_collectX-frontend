import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import {startGetNews, startGetActiveMarkets} from "../actions/general";
import { Link } from "react-router-dom";
import Loading from "../components/Utils/Loader"
import News from "../components/Dashboard/News"
import ActiveMarkets from "../components/Dashboard/ActiveMarkets"

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
            <Col className="dashboard-left" xl="8" lg="12" xs="12">
              <Row>
                <Col lg="12">
                  <Card className="card-plain dashboard-banner">
                    <CardBody>
                      <img src={require("assets/img/dashboard-banner.png")}></img>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="dashboard-banner-bellow" xl="4" lg="12">
                <Col xl="6" lg="12">
                  <Card className="card-plain portfolio">
                    <CardHeader>
                      <Row>
                        <Col className="text-left">
                          <CardTitle tag="h2">Portfolio</CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Link to="/spot-wallet/balance">
                      <img src={require("assets/img/dashboard-chart.png")}></img>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl="6" lg="12">
                  <ActiveMarkets activeMarkets={this.state.activeMarkets} />
                </Col>
              </Row>
            </Col>
            <Col className="dashboard-right" xl="4" lg="12" xs="12">
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