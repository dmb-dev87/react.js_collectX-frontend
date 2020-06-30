import React from "react";
import {connect} from 'react-redux';

import {startGetNews} from "../actions/general";
import Loading from "../components/Utils/Loader"

import SecurityPad from "../components/Security/SecurityPad";
import Security2FA from "../components/Security/Security2FA";
import SecurityVerify from "../components/Security/SecurityVerify";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      news: nextProps.news
    })
  }
  render() {
    return (
      <>
        <div className={this.props.fluid ? "content-fluid security" : "content security"}>
          { 
            this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          
          <Row>
            <h2>Security</h2>
            <Col xl="12">
              <SecurityPad />
            </Col>
            
            <Col xl="12">
              <Row>
                <Col xl="6">
                  <Security2FA />
                </Col>
                <Col xl="6">
                  <SecurityVerify />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.general.news,
    isNewsLoading: state.general.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startGetNews: () => dispatch(startGetNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);