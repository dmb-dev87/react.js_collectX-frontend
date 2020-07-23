import React from "react";

import Loading from "../components/Utils/Loader"
import StampCardStyle1  from "../components/Explore/StampCard";
import Scroller from "../components/Explore/Scroller";

import { Row, Col, Button } from "reactstrap";
import { connect } from 'react-redux';

import { startGetExplores } from "../actions/explore";

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.props.startGetExplores();
        this.state = {
            button_status: 0,
        };
    }

    render() {

        const { explores_features, explores_new_era_card, explores_1990, explores_1980, explores_1970, explores_classic } = this.props;

        return (
            <>
                <Scroller/>
                <div className={this.props.fluid ? "content-fluid explore" : "content explore"}>
                    {
                        this.props.isExploresLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }                    
                    <Row className="header">
                        <h2>Explore</h2>
                    </Row>
                    <Row className="description">
                        <Col xl="6" lg="12" xs="12">
                            <h3>Discover Rare Collectibles On CollectX</h3>
                        </Col>
                        <Col xl="6" lg="12" xs="12">
                            <div className="btn-drop">
                                Highest Price
                                <b className="caret d-none d-lg-block d-xl-block custom-pos"></b>
                            </div>
                        </Col>
                    </Row>
                    <Row className="button-group">
                        <Button>All Collections</Button>
                        <Button>NBA</Button>
                        <Button>MLB</Button>
                        <Button>NFL</Button>
                        <Button>Pokemon</Button>
                        <Button>Stamps</Button>
                    </Row>
                    
                    <div className="explore_title">Featured</div>
                    <Row className="card-list">
                        {
                            explores_features && explores_features.map((explore, key) => {
                                return (
                                    <Col className="justify-content-center" md="auto" key={key}>
                                        <StampCardStyle1 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <div className="explore_title">New Era Card</div>
                    <Row className="card-list">
                        {
                            explores_new_era_card && explores_new_era_card.map((explore, key) => {
                                return (
                                    <Col className="justify-content-center" md="auto" key={key}>
                                        <StampCardStyle1 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <div className="explore_title">1990's</div>
                    <Row className="card-list">
                        {
                            explores_1990 && explores_1990.map((explore, key) => {
                                return (
                                    <Col className="justify-content-center" md="auto" key={key}>
                                        <StampCardStyle1 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <div className="explore_title">1980's</div>
                    <Row className="card-list">
                        {
                            explores_1980 && explores_1980.map((explore, key) => {
                                return (
                                    <Col className="justify-content-center" md="auto" key={key}>
                                        <StampCardStyle1 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <div className="explore_title">1970's</div>
                    <Row className="card-list">
                        {
                            explores_1970 && explores_1970.map((explore, key) => {
                                return (
                                    <Col className="justify-content-center" md="auto" key={key}>
                                        <StampCardStyle1 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <div className="explore_title">Classic Card(Pre 1970)</div>
                    <Row className="card-list">
                        {
                            explores_classic && explores_classic.map((explore, key) => {
                                return (
                                    <Col md="auto" className="justify-content-center" md="auto" key={key}>
                                        <StampCardStyle1 image={explore.image} title={explore.title} percent={explore.percent} content={explore.content} type={explore.type} />
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
        explores_features: state.explore.explores_features,
        explores_new_era_card: state.explore.explores_new_era_card,        
        explores_1990: state.explore.explores_1990,        
        explores_1980: state.explore.explores_1980,        
        explores_1970: state.explore.explores_1970,
        explores_classic: state.explore.explores_classic,
        isExploresLoading: state.explore.loading,
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetExplores: () => dispatch(startGetExplores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);