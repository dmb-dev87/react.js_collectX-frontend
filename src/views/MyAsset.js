import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import classNames from "classnames";
import {startGetMyAssets} from "../actions/myAsset";
import Loading from "../components/Utils/Loader";
import ImageCard from "../components/Assets/ImageCard";
import ChartCard from "../components/Assets/ChartCard";


// reactstrap components
import {
  Row, Col,
} from "reactstrap";

// core components

class MyAsset extends React.Component {
  constructor(props) {
    super(props);
    this.props.startGetMyAssets();
    this.state = {
      myAssets: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      myAssets: nextProps.myAssets
    })
  }
  
  render() {
    const { myAssets } = this.state;
    return (
      <div className={this.props.fluid ? "content-fluid assets" : "content assets"}>
        { 
          this.props.isMyAssetsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
        }
        <Row>
          <div className="header">
            <h2>My Assets</h2>
            <h3>An Overview Of Your Unique Collection</h3>
          </div>
        </Row>
        {
          myAssets.map((myAsset, key) => {
            return (
              <Row>
                <Col xl="3" lg="12"> 
                  <ImageCard image={myAsset.imageCard.image} title={myAsset.imageCard.title} name={myAsset.imageCard.name} content={myAsset.imageCard.content} />
                </Col>
                <Col xl="9" lg="12"> 
                  <ChartCard data={myAsset.chartCard.data} />
                </Col>
              </Row>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myAssets: state.myAsset.myAssets,
    isMyAssetsLoading: state.myAsset.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startGetMyAssets: () => dispatch(startGetMyAssets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAsset);