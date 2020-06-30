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

class Register extends React.Component {
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
      <div className={this.props.fluid ? "content-fluid login" : "content login"}>
        { 
          this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
        }
        <Row>
          <Col xl="5" id="form-part">
            <LoginForm title='Register' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);