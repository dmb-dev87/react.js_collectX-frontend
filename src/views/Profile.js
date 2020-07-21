import React from "react";
import Loading from "../components/Utils/Loader";
import ProfileChart from "../components/ProfileChart.js"

import { Card, CardBody, Row, Col, Button, CardHeader, Dropdown,  DropdownToggle,  DropdownItem, DropdownMenu} from "reactstrap";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    };

    render() {
        return (
            <>
                <div className={this.props.fluid ? "content-fluid profile" : "content profile"}>
                    {
                        this.props.isNewsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <Row className="profile-top">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="6" className="photo">
                                        <Button>Edit</Button>
                                        <img alt="..." src={require("assets/img/a1.png")} />
                                        <div>
                                            <h2>Dallasrushing</h2>
                                            <h3>Dallas Rushing</h3>
                                            <p>Co-Founder of CollectX. Collector of </p>
                                            <p>NBA, MMA, MLB & Rare Stamps.</p>
                                            <div className="progress-bar">
                                                <div></div>
                                                <span> Level 9 </span>
                                            </div>
                                            <div className="progress-desc">
                                                <h6>XP 743<span>/1000</span></h6>
                                                <h6>257 XP <span>To Level Up</span></h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6" className="badges">
                                        <h2>Badges</h2>
                                        <Row>
                                            <Col md="auto">
                                                <div className="style-1"></div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="style-2"></div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="style-3"></div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="style-4"></div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="style-5">+8</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className="profile-bottom">
                        <Col md="6">
                            <Card>
                                <CardHeader>
                                    <h2>Daily Trade Activity</h2>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {this.setState({dropdownOpen: !this.state.dropdownOpen})}}>
                                        <DropdownToggle caret>
                                            Weekly
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Daily</DropdownItem>
                                            <DropdownItem>Weekly</DropdownItem>
                                            <DropdownItem>Monthly</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </CardHeader>
                                <CardBody>
                                    <ProfileChart height={300} />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="weekly-challenges">
                            <Card>
                                <CardHeader>
                                    <h2>Weekly Challenges</h2>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col className="style-1"></Col>
                                        <Col>
                                            <div>
                                                <h3>Make 5 Trades</h3>
                                                <p>80%</p><div></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="style-2"></Col>
                                        <Col>
                                            <div>
                                                <h3>Refer 3 Friends</h3>
                                                <p>33%</p><div className="purple-color"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="style-3"></Col>
                                        <Col>
                                            <div>
                                                <h3>Acquire 1% Of a card</h3>
                                                <p>64%</p><div className="green-color"></div>
                                            </div>
                                        </Col>
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

export default Profile;