import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import {startGetExplores} from "../actions/explore";
import Loading from "../components/Utils/Loader"
import ImageCard from "../components/Assets/ImageCard";
import ChartCard from "../components/Assets/ChartCard";

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

class Explore extends React.Component {
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
    const { explores } = this.state;
    return (
      <>
        <div className={this.props.fluid ? "content-fluid assets" : "content assets"}>
          { 
            this.props.isExploresLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          <Row>
            <div className="header">
              <h2>Explore</h2>
              <h3>Discover Rare Collectibles On CollectX</h3>
              <div className="btn-karma-drop">Trending<b className="caret d-none d-lg-block d-xl-block custom-pos"></b></div>
            </div>
          </Row>
          {
            explores.map((explore, key) => {
              return (
                <Row key={key}>
                  <div className="row-card-grid">
                    <div className="image-row-card">
                      <ImageCard image={explore.imageCard.image} title={explore.imageCard.title} name={explore.imageCard.name} content={explore.imageCard.content}></ImageCard>
                    </div>
                    <div className="chart-row-card">
                    <ChartCard data={explore.chartCard.data} />
                    </div>
                  </div>
                </Row>
              );
            })
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Explore);