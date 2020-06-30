import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import {startGetExplores} from "../actions/explore";
import Loading from "../components/Utils/Loader"
import ImageCard from "../components/Assets/ImageCard";
import ChartCard from "../components/Assets/ChartCard";
import AssetSpecCard from "../components/Assets/AssetSpecCard";
import GalleryCard from "../components/Assets/GalleryCard";

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

class Assets extends React.Component {
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
        <div className={this.props.fluid ? "content-fluid assets" : "content assets"}>
          { 
            this.props.isExploresLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          <Row>
            <Col className="header-MJ">

            </Col>
          </Row>
                    
          <Row>
            <div className="row-card-grid">
              <div className="image-row-card">
                <ImageCard image={require("assets/img/card1.png")} title={"'86 Fleer"} name={"Machael Jordan"} content={"Rookie Card"}></ImageCard>
                </div>
              <div className="chart-row-card">
                <ChartCard data={[542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]} />
              </div>
            </div>
          </Row>
          <Row>
              <div className="assets-row-card-grid">
                <AssetSpecCard />
                <GalleryCard />
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Assets);