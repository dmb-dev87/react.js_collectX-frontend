import React from  "react";
import { Modal, ModalBody, TabPane, TabContent, Row, Col, Card, CardBody, Nav, NavItem, NavLink, Input, Button } from 'reactstrap';
import classnames from 'classnames';
import mj from '../../assets/img/MJR.png';
import visa from '../../assets/img/withdraw/visa.png';

class ModalCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }

    setModal = () => {
        const { changeToggleModal } = this.props;
        changeToggleModal(false);
    }

    changeToggleTab = (modalType) => {
        const { changeToggleTab } = this.props;
        changeToggleTab(modalType);
    }

    render() {

        const {
            buttonLabel,
            className,
            modal,
            modalType
        } = this.props;

        return (
            <div>
                <Modal isOpen={modal} toggle={this.setModal} className="buy-sell-dialog">
                    <ModalBody>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames("nav-link-one", { active: modalType === '1' })}
                                    onClick={() => this.changeToggleTab('1')}
                                >
                                    Buy
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames("nav-link-two", { active: modalType === '2' })}
                                    onClick={() => this.changeToggleTab('2')}
                                >
                                    Sell
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={modalType}>
                            <TabPane tabId="1">
                                <Row className="row-sep">
                                    <Col sm="12" className="middle-type">
                                        <h2>Asset</h2>
                                        <Card className="card-active background-card">
                                            <CardBody>
                                                <div className="card-image image-card">
                                                    <img
                                                        alt="..."
                                                        className="avatar"
                                                        src={mj}
                                                    />
                                                </div>
                                                <div className="card-unit">
                                                    <p className="headerone">MJR</p>
                                                    <p className="descryone">'86 Fleer Rookie Card</p>
                                                </div>
                                                <div className="card-data">
                                                    <p>+6.19%</p>
                                                    <p>$126.31</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="row-sep">
                                    <Col sm="12" className="middle-type">
                                        <h2>Payment Method</h2>
                                        <Card className="card-active background-card">
                                            <CardBody>
                                                <div className="card-image">
                                                    <img
                                                        alt="..."
                                                        className="withraw-card"
                                                        src={visa}
                                                    />
                                                </div>
                                                <div className="card-unit">
                                                    <p className="headertwo">Dallas | Rushing</p>
                                                    <p className="descrytwo">xxxx xxxx xxxx 9232</p>
                                                </div>
                                                <div className="card-data">                                                             
                                                    <div className="icon-sort-up"> </div>
                                                    <div className="icon-sort-down"> </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="row-sep">
                                    <Col sm="12" className="middle-type">
                                        <h2>Amount To Buy</h2>
                                        <Row>
                                            <Col sm="6" xs="6" className="middle-grid-type">
                                                <Input placeholder="0.00" className="withInput" size="8"/>
                                                <span className="withText">USD</span>
                                            </Col>
                                            <Col sm="6" xs="6" className="middle-grid-type">
                                                <Input placeholder="0.00" className="withInput" size="8"/>
                                                <span className="withText">MJR</span>
                                            </Col>
                                        </Row>
                                        <p className="balanceText">Balance: 9,857.03</p>
                                    </Col>
                                </Row>
                                <Row className="row-sep-btn">
                                    <Col sm="12">
                                        <Button className="button-back" onClick={() => this.setModal()}>Buy Instantly</Button>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row className="row-sep">
                                    <Col sm="12" className="middle-type">
                                        <h2>Asset</h2>
                                        <Card className="card-active background-card">
                                            <CardBody>
                                                <div className="card-image image-card">
                                                    <img
                                                        alt="..."
                                                        className="avatar"
                                                        src={mj}
                                                    />
                                                </div>
                                                <div className="card-unit">
                                                    <p className="headerone">MJR</p>
                                                    <p className="descryone">'86 Fleer Rookie Card</p>
                                                </div>
                                                <div className="card-data">
                                                    <p>+6.19%</p>
                                                    <p>$126.31</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="row-sep">
                                    <Col sm="12" className="middle-type">
                                        <h2>Payment Method</h2>
                                        <Card className="card-active background-card">
                                            <CardBody>
                                                <div className="card-image">
                                                    <img
                                                        alt="..."
                                                        className="withraw-card"
                                                        src={visa}
                                                    />
                                                </div>
                                                <div className="card-unit">
                                                    <p className="headertwo">Dallas | Rushing</p>
                                                    <p className="descrytwo">xxxx xxxx xxxx 9232</p>
                                                </div>
                                                <div className="card-data">
                                                    <div className="icon-sort-up"> </div>
                                                    <div className="icon-sort-down"> </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="row-sep">
                                    <Col sm="12" className="middle-type">
                                        <h2>Amount To Sell</h2>
                                        <Row>
                                            <Col sm="6" xs="6" className="middle-grid-type">
                                                <Input placeholder="0.00" className="withInput" size="8"/>
                                                <p className="withText">MJR</p>
                                            </Col>
                                            <Col sm="6" xs="6" className="middle-grid-type">
                                                <Input placeholder="0.00" className="withInput" size="8"/>
                                                <p className="withText">USD</p>
                                            </Col>
                                        </Row>
                                        <p className="balanceText">Balance: 22.47 MJR</p>
                                    </Col>
                                </Row>
                                <Row className="row-sep-btn">
                                    <Col sm="12">
                                        <Button className="button-back" onClick={() => this.setModal()}>Sell Instantly</Button>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalCard;