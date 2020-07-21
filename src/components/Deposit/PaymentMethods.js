
import React from "react";
import { Row, Col, Button } from "reactstrap";

class PaymentMethods extends React.Component {    
    constructor(props) {
        super(props);
    }

    changeModalType = (flag) => {
        const { changeModalType } = this.props;
        changeModalType(flag);
    }

    render() {
        return (
            <Col className="paymentmethods">
                <Row className="sec">
                    <h2>Payment Methods</h2>
                </Row>
                <Row className="description">
                    <p>Easily & securely add a debit card or bank account.</p>
                </Row>
                <Row className="visa-card">
                    <img src={require("assets/img/deposit/visa.png")}></img>
                    <div className="card-text">
                        <h3>Dallas I Rushing</h3>
                        <p>XXXX XXXX XXXX 9232</p>
                    </div>
                    <Button className="btn btn-edit" onClick={() => this.changeModalType('1')}>Edit</Button>
                </Row>
                <Row className="hbs-card">
                    <img src={require("assets/img/deposit/hbc.png")}></img>
                    <div className="card-text">
                        <h3>Bank Account</h3>
                        <p>XXXX XXXX XXXX 2437</p>
                    </div>
                    <Button className="btn btn-edit" onClick={() => this.changeModalType('2')}>Edit</Button>
                </Row>
                <Row className="method">
                    <Button className="btn btn-add" onClick={() => this.changeModalType('0')}>Add Payment Method</Button>
                </Row>
            </Col>
        );
    }
}

export default PaymentMethods;