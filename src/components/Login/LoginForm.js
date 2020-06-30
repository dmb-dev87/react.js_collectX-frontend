/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle,
  Row, 
  Col, 
  Nav, 
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import MailLoginForm from "./MailLoginForm";
import PhoneLoginForm from "./PhoneLoginForm";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(2).fill('1'),
    };
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <MailLoginForm />
        </TabPane>
        <TabPane tabId="2">
          <PhoneLoginForm />
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="form-content">
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <CardTitle tag="h2" className="login-title">{this.props.title}</CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Col className="tab">
            <Nav tabs>
              <NavItem>
                <NavLink id="email"
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Email
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="phone"
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Phone
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </CardBody>
      </Card>
      </div>
      );
    }
}

export default LoginForm;
