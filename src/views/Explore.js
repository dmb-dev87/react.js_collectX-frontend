import React from "react";
import {connect} from 'react-redux';
import {startGetExplores} from "../actions/explore";
import Loading from "../components/Utils/Loader"
import StampCard from "../components/Explore/StampCard";

// reactstrap components
import {
  Row, Col, Button
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
        <div className={this.props.fluid ? "content-fluid explore" : "content explore"}>
          { 
            this.props.isExploresLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          <Row className="header">
            <h2>Explore</h2>
          </Row>
          <Row className="description">
              <h3>Discover Rare Collectibles On CollectX</h3>
              <div className="btn-drop">
                Highest Price
                <b className="caret d-none d-lg-block d-xl-block custom-pos"></b>
              </div>
          </Row>
          <Row className="button-group">
            <Button>All Collections</Button>
            <Button>NBA</Button>
            <Button>MLB</Button>
            <Button>NFL</Button>
            <Button>Pokeman</Button>
            <Button>Stamps</Button>
          </Row>
          <Row className="card-list">
          {
            explores.map((explore, key) => {
              return (
                <Col lg="5ths" className="row-card-grid">
                  <div className="image-row-card">
                    <StampCard image={explore.image} title={explore.title} percent={explore.percent} content={explore.content}></StampCard>
                  </div>
                </Col>
              );
            })
          }
          </Row>
          <Row className="bottom">
            <Button>See More Assets</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Explore);