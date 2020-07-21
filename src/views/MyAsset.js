import React from "react";
import { connect } from 'react-redux';
import { startGetMyAssets } from "../actions/myAsset";
import { startGetExplores } from "../actions/explore";
import Loading from "../components/Utils/Loader";
import ImageCard from "../components/Assets/ImageCard";
import ChartCard from "../components/Assets/ChartCard";
import {StampCardStyle2} from "../components/Explore/StampCard";

import {
    Row, Col, Button, ButtonGroup
} from "reactstrap";

class MyAsset extends React.Component {
    constructor(props) {
        super(props);
        this.props.startGetMyAssets();
        this.props.startGetExplores();
        this.state = {
            myAssets: [],
            displayMode: 0,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            myAssets: nextProps.myAssets
        })
    }

    render() {
        const { myAssets, displayMode } = this.state;
        const { explores_features} = this.props;

        var currentDisplayMode = this.state.displayMode;

        var getDisplayModeClass = function( name, index ) {
            if ( index === currentDisplayMode )
                return name + ' active';
            return name;
        };
        
        return (
            <div className={this.props.fluid ? "content-fluid assets" : "content assets"}>
                {
                    this.props.isMyAssetsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                }
                <Row>
                    <div className="header">
                        <h2>My Assets</h2>
                        <h3>An Overview Of Your Unique Collection</h3>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className="myasset-display-mode">
                            <Button onClick={() => {this.setState({displayMode: 0})}} className={getDisplayModeClass("chart-mode", 0)}><div></div></Button>
                            <Button onClick={() => {this.setState({displayMode: 1})}} className={getDisplayModeClass("single-mode", 1)}><div></div><div></div></Button>
                        </ButtonGroup>
                    </div>
                </Row>
                {
                    displayMode == 0 ? myAssets.map((myAsset, key) => {
                        return (
                            <Row className="justify-content-center" key={key}>
                                <Col className="col-width-291px">
                                    <ImageCard image={myAsset.imageCard.image} title={myAsset.imageCard.title} name={myAsset.imageCard.name} content={myAsset.imageCard.content} />
                                </Col>
                                <Col>
                                    <ChartCard data={myAsset.chartCard.data} />
                                </Col>
                            </Row>
                        );
                    }) : (
                        <Row>
                            {explores_features && explores_features.map((explore, key) => {
                            return (
                                <Col className="justify-content-center display-flex" md="auto" key={key}>
                                    { 
                                        key % 2 == 1 ? ( 
                                            <StampCardStyle2 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} selected={0}/>
                                        ) : (
                                            <StampCardStyle2 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} selected={1}/>
                                        )
                                    }
                                    
                                </Col>
                            );})}
                        </Row>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myAssets: state.myAsset.myAssets,
        explores_features: state.explore.explores_features,
        isMyAssetsLoading: state.myAsset.loading,
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetMyAssets: () => dispatch(startGetMyAssets()),
    startGetExplores: () => dispatch(startGetExplores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAsset);