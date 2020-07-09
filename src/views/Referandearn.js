import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  CardText
} from "reactstrap";

// core components
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
            <div className={this.props.fluid ? "content-fluid referandearn" : "content referandearn"}>
                <Row>
                    <div className="header gradient_background" xl="12">
                        <h2>Refer & Earn</h2>
                        <h4>Earn 25% Commission on every trade your friends make on Collectx</h4>
                    </div>                
                </Row>
                <Row id="card_overflow">
                    <Col xl="6" lg="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left">
                                        <CardTitle tag="h2">Invite Now</CardTitle>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col className="text-left">
                                        <CardText tag="h4">User your unique referral link to invite </CardText>
                                        <CardText tag="h4">friends to Collectx. This can be shared by </CardText>
                                        <CardText tag="h4">phone, email or on other platforms. </CardText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-left unique_link">
                                        <CardText tag="h4">Your unique link</CardText>
                                        <div className="unique_url">
                                            <p>www.CollectX.exchange/r/138</p>
                                            <button>Copy</button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" lg="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left">
                                        <CardTitle tag="h2">Stats</CardTitle>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row id="stats_custom">                                
                                    <Col xl="6" lg="6" xs="6">
                                        <CardText tag="h4">Referral Level</CardText>
                                        <CardText tag="h4" id="border_round">Level 1</CardText>
                                    </Col>                                
                                    <Col xl="6" lg="6" xs="6">
                                        <CardText tag="h4">Total Invites</CardText>
                                        <CardText tag="h4" id="border_round">3 Friends</CardText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-left amount_earned">
                                        <CardText tag="h4">Amount Earned</CardText>
                                        <button>
                                            <div>$</div>
                                            <span>$2,381.22 USD</span>
                                        </button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>    
                </Row>
                <Row id="referred_users">
                    <Col xl="12" lg="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left">
                                        <CardTitle tag="h2">Referred Users</CardTitle>
                                        <p className="earnings">Earnings</p>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row id="referred_users_list">                                                                    
                                    <img src={require("assets/img/avatars/l11.png")} />  
                                    <p className="user_name">Ben O'hansen</p>
                                    <p className="earnings">$1,114.21 USD</p>
                                </Row>
                                <Row id="referred_users_list">                                                                    
                                    <img src={require("assets/img/avatars/l12.png")} />  
                                    <p className="user_name">Eva Rigalo</p>
                                    <p className="earnings">$828.39 USD</p>
                                </Row>
                                <Row id="referred_users_list">                                                                    
                                    <img src={require("assets/img/avatars/l13.png")} />  
                                    <p className="user_name">Quez Peterson</p>
                                    <p className="earnings">$174.49 USD</p>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
        );
    }
}

export default Dashboard;
