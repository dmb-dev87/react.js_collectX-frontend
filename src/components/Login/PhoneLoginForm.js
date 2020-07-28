/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import {
    Row,
    Col,
    Form,
    Input,
} from "reactstrap";

class PhoneLoginForm extends React.Component {
    render() {
        return (
            <div className="login-form">
                <Row>
                    <Col className="input-entry">
                        <Input className="input-form" placeholder="Enter Phone Number" type="tel"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a id="cant-access" href="#">Can't Access Phone Number?</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="btn btn-send-code">Send Code</button>
                    </Col>
                    <Col>
                        <button className="btn btn-login">Log In</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PhoneLoginForm;
