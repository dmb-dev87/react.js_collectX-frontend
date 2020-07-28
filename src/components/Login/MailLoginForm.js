import React from "react";
import { connect } from 'react-redux';
import { startGetAuth } from "../../actions/auth";
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";

import {
    Row,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";

class MailLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password'
        };
    }

    handlePasswordType = () => {
        this.setState({
            type: this.state.type === 'password' ? 'text' : 'password'
        });
    }

    handleLogin = () => {
        this.props.startGetAuth(true);
    }

    render() {
        return (
            !this.props.auth ? (<div className="login-form">
                <Row>
                    <Col className="input-entry">
                        <Input className="input-form" placeholder="Email Address"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col className="input-entry">
                        <InputGroup>
                            <Input className="input-form" placeholder="Password" type={this.state.type} />
                            <InputGroupAddon addonType="append">
                                <InputGroupText style={{ cursor: "pointer" }} onClick={this.handlePasswordType}>
                                    <img src={require("assets/img/login/iconfinder__1ui_2303106.svg")} />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a id="forgot-pwd" href="#">Forgot Password?</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/register">
                            <button className="btn btn-signup">Sign Up</button>
                        </Link>
                    </Col>
                    <Col>
                        <button className="btn btn-login" onClick={this.handleLogin}>Log In</button>
                    </Col>
                </Row>
            </div>) : <Redirect to="/dashboard" />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetAuth: (auth) => dispatch(startGetAuth(auth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailLoginForm);
