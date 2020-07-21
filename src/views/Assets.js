import React from "react";
import { connect } from 'react-redux';
import { startGetExplores } from "../actions/explore";
import Loading from "../components/Utils/Loader"
import ImageCard from "../components/Assets/ImageCard";
import ChartCard from "../components/Assets/ChartCard";
import AssetSpecCard from "../components/Assets/AssetSpecCard";
import GalleryCard from "../components/Assets/GalleryCard";
import ModalCard from "../components/Assets/ModalCard";

import {
    Row,
    Col,
} from "reactstrap";

class Assets extends React.Component {
    constructor(props) {
        super(props);
        this.props.startGetExplores();
        this.state = {
            explores: [],
            modalType: '1',
            toggleModal: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            explores: nextProps.explores
        })
    }

    changeModalType = (modalType) => {
        this.setState({
            modalType,
            toggleModal: true,
        });
    }

    changeToggleModal = (toggleModal) => {
        this.setState({
            toggleModal,
        });
    }

    changeToggleTab = (modalType) => {
        this.setState({
            modalType,
        });
    };

    render() {

        const { modalType, toggleModal } = this.state;

        return (
            <>
                <div className={this.props.fluid ? "content-fluid assets" : "content assets"}>
                    {
                        this.props.isExploresLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <ModalCard modalType={modalType} modal={toggleModal} changeToggleModal={this.changeToggleModal} changeToggleTab={this.changeToggleTab}/>
                    <Row className="justify-content-center">                        
                        <Col className="col-width-291px">                            
                            <ImageCard image={require("assets/img/card1.png")} title={"'86 Fleer"} name={"Michael Jordan"} content={"Rookie Card"}></ImageCard>                            
                        </Col>
                        <Col>
                            <ChartCard data={[500, 540, 500, 580, 600, 453, 492, 540, 568, 610, 700, 630]} type={true} changeModalType={this.changeModalType}/>
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