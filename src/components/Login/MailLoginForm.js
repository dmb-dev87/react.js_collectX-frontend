/*eslint-disable*/
import React from "react";
import  { Redirect } from 'react-router-dom'
// used for making the prop types of this component
import PropTypes, { bool } from "prop-types";

// reactstrap components
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
      type: 'password',
      auth: false
    };
  }

  handlePasswordType = () => {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password'
    });
  }

  handleLogin = () => {
    this.setState({
      auth: true
    })
  }

  render() {
    return (
      !this.state.auth ? (<div className="login-form">
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
                <InputGroupText style={{cursor: "pointer"}} onClick={this.handlePasswordType}>
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
            <button className="btn btn-signup">Sign Up</button>
          </Col>
          <Col>
            <button className="btn btn-login" onClick={this.handleLogin}>Log In</button>
          </Col>
        </Row>
      </div>) : <Redirect to="/" />
      );
    }
}

export default MailLoginForm;
