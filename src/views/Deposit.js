import React from "react";
import { connect } from 'react-redux';
import { startGetNews } from "../actions/general";
import Loading from "../components/Utils/Loader";
import { Link } from "react-router-dom";
import USD from "../components/Deposit/USD";
import PaymentMethods from "../components/Deposit/PaymentMethods";
import PaymentCard  from "../components/Assets/PaymentCard";

import {Row, Col, Button} from "reactstrap";

class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleModal: false,
            modalType: 0, 
            card_info: {  
                card_name : "Dallas Rushing", 
                card_num : "2834 2223 2232 2233", 
                exp_date : "12/2024", 
                CVV: "344", 
                area_code: "93550",
            },
        };
    }

    changeToggleModal = (toggleModal) => {
        this.setState({
            toggleModal,
        });
    }

    changeModalType = (modalType) => {
        this.setState({
            modalType,
            toggleModal: true,
        });
    }

    render() {

        const { toggleModal, card_info, modalType } = this.state;

        return (
            <>
                <div className={this.props.fluid ? "content-fluid deposit" : "content deposit"}>
                    {
                        this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <PaymentCard modal={toggleModal} changeToggleModal={this.changeToggleModal}  card_info={card_info} modalType={modalType}/>
                    <Row className="withdraw">
                        <h2>Deposit</h2>
                        <Link to="/spot-wallet/withdraw">
                            <Button className="shape2">
                                <img src={require("assets/img/deposit/arrow_up.png")} alt="ok" className="arrow_icon" />
                                <span className="withdraw-deposit-font">Withdraw</span>
                            </Button>
                        </Link>
                    </Row>
                    <Row className="head">
                        <div>
                            <h3>Fiat</h3>
                        </div>
                    </Row>
                    <Row className="payment">
                        <Col xl="6" lg="12">
                            <USD />
                        </Col>
                        <Col xl="6" lg="12">
                            <PaymentMethods changeModalType={this.changeModalType}/>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);