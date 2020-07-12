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
  Row,
  Col,
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
            <Col xl="3" lg="12">
              <div className="image-row-card">
                <ImageCard image={require("assets/img/card1.png")} title={"'86 Fleer"} name={"Machael Jordan"} content={"Rookie Card"}></ImageCard>
              </div>
            </Col>
            <Col xl="9" lg="12">
              <div className="chart-row-card">
                <ChartCard data={[500, 540, 500, 580, 600, 453, 492, 540, 568, 610, 700, 630]} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl="6" lg="12">              
              <AssetSpecCard />
            </Col>
            <Col xl="6" lg="12">              
              <GalleryCard />
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

export default connect(mapStateToProps, mapDispatchToProps)(Assets);