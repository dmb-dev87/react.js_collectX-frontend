import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import {startGetNews, startGetActiveMarkets} from "../actions/general";
import Loading from "../components/Utils/Loader"
import News from "../components/Dashboard/News"
import ActiveMarkets from "../components/Dashboard/ActiveMarkets"
import HomeChartCard from "../components/Assets/HomeChartCard";

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
            <Col className="dashboard-left" xl="8" lg="12" >
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
            <Col className="dashboard-right">
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