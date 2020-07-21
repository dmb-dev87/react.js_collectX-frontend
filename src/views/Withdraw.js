import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Loading from "../components/Utils/Loader";
import WithdrawUSD from "../components/Withdraw/WithdrawUSD";
import PaymentMethods from "../components/Deposit/PaymentMethods";
import PaymentCard  from "../components/Assets/PaymentCard";

import {Row, Col, Button,} from "reactstrap";

// core components

class Withdraw extends React.Component {
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
                <div className={this.props.fluid ? "content-fluid withdraw" : "content withdraw"}>
                    {
                        this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <PaymentCard modal={toggleModal} changeToggleModal={this.changeToggleModal}  card_info={card_info} modalType={modalType}/>
                    <Row className="titlepad">
                        <h2>Withdraw</h2>
                        <Link to="/spot-wallet/deposit">
                            <Button className="shape1">
                                <img src={require("assets/img/deposit/arrow_down.png")} alt="ok" className="arrow_icon" />
                                <span className="withdraw-deposit-font">Deposit</span>
                            </Button>
                        </Link>
                    </Row>
                    <Row className="estimated">
                        <div>
                            <p>Estimated Balance:</p>
                            <div>
                                <h2 className="amount">$9,193.84</h2>
                                <h4>USD</h4>
                            </div>
                        </div>
                    </Row>
                    <Row className="payment">
                        <Col xl="6" lg="12" sm="12">
                            <WithdrawUSD />
                        </Col>
                        <Col xl="6" lg="12" sm="12">
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

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);