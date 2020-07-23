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
                                    <Col xl="6" lg="12" md="12" className="photo">
                                        <Button>Edit</Button>
                                        <img alt="..." src={require("assets/img/avatars/dallas.png")} />
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
                                    <Col xl="6" lg="12" md="12" className="badges">
                                        <h2>Badges</h2>
                                        <Row>
                                            <Col md="2" xs="4">
                                                <div className="style-1"></div>
                                            </Col>
                                            <Col md="2" xs="4">
                                                <div className="style-2"></div>
                                            </Col>
                                            <Col md="2" xs="4">
                                                <div className="style-3"></div>
                                            </Col>
                                            <Col md="2" xs="4">
                                                <div className="style-4"></div>
                                            </Col>
                                            <Col md="2" xs="4">
                                                <div className="style-5">+8</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className="profile-bottom">
                        <Col xl="6" lg="12" md="12" className="weekly-challenges">
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
                                                <p>XP 240<span>/300</span></p><div></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="style-2"></Col>
                                        <Col>
                                            <div>
                                                <h3>Refer 3 Friends</h3>
                                                <p>XP 100<span>/300</span></p><div className="purple-color"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="style-3"></Col>
                                        <Col>
                                            <div>
                                                <h3>Get 1% Of A card</h3>
                                                <p>XP 164<span>/300</span></p><div className="green-color"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button>Reach Level 9 To Open Up A Pack</Button>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="6" lg="12" md="12">
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
                       
                    </Row>
                </div>
            </>
        );
    }
}

export default Profile;