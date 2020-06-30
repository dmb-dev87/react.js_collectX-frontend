import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import Loading from "../../components/Utils/Loader";
import LoginForm from "../../components/Login/LoginForm";
import LogoImage from "../../components/Login/LogoImage";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
    })
  }
  render() {
    return (
      <>
        <div className="content-fluid login">
          <Row style={{height: "100%"}}>
            <Col xl="5" id="form-part">
              <LoginForm title='Log In' />
            </Col>
            <Col xl="7" id="logo-part">
              <LogoImage />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);