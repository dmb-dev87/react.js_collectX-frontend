import React from "react";
import { connect } from 'react-redux';
//nodejs library that concatenates clsses
import classNames from "classnames"
import { startGetBalance } from "../../actions/balance";
import { Link } from "react-router-dom";
import Loading from "../../components/Utils/Loader";

//reactstrap components
import {Button, Card, CardBody, Label, Input, Table, Row, Col} from "reactstrap";

//core components

class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.props.startGetBalance();
        this.state = {
            balance: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            balance: nextProps.balance
        })
    }

    render() {
        return (
            <>
                <div className={this.props.fluid ? "content-fluid balance" : "content balance"}>
                    {
                        this.props.isBalanceLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                    }
                    <div className="content">
                        <Row className="balance-content">
                            <Col md="12">
                                <Row className="header">
                                    <Col md="4">
                                        <h2>Balance</h2>
                                    </Col>
                                    <Col md="8" className="header-button">
                                        <Link to="/spot-wallet/deposit">
                                            <Button className="shape1">
                                                <img src={require("assets/img/deposit/arrow_down.png")} alt="ok" className="arrow_icon" />
                                                <span className="withdraw-deposit-font">Deposit</span>
                                            </Button>
                                        </Link>
                                        <Link to="/spot-wallet/withdraw">
                                            <Button className="shape2">
                                                <img src={require("assets/img/deposit/arrow_up.png")} alt="ok" className="arrow_icon" />
                                                <span className="withdraw-deposit-font">Withdraw</span>
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col md="12">
                                        <h6 className="estimate-balance">Estimated Balance:</h6>
                                    </Col>
                                    <Col md="12">
                                        <Row>
                                            <Col md="9">
                                                <span className="label-total">$18,193.84</span>
                                                <Label className="label-total-unit">
                                                    USD
                                                </Label>
                                            </Col>
                                            <Col md="3">
                                                <Row className="search">
                                                    <Input placeholder="Search Coins" className="input" />
                                                    <img src="/search.png" alt="logo" className="icon-search" />
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md="12" className="card-plain-responsive">
                                <Card className="card-plain">
                                    <CardBody>
                                        <Table className="table-border" responsive>
                                            <thead className="text-primary">
                                                <tr>
                                                    <th>
                                                        <button type="button" className="btn-none left-space">Asset
                                                            <div className="icon-sort-up"></div>
                                                            <div className="icon-sort-down"></div>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button type="button" className="btn-none">Asset Name
                                                            <div className="icon-sort-up"> </div>
                                                            <div className="icon-sort-down"> </div>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button type="button" className="btn-none">Balance
                                                            <div className="icon-sort-up"> </div>
                                                            <div className="icon-sort-down"> </div>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button type="button" className="btn-none">Value
                                                            <div className="icon-sort-up"> </div>
                                                            <div className="icon-sort-down"> </div>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button type="button" className="btn-none">Action
                                                            <div className="icon-sort-up"> </div>
                                                            <div className="icon-sort-down"> </div>
                                                        </button>
                                                    </th>
                                                    <th></th>
                                                    <th><button type="button" className="btn-circle" /></th>
                                                    <th><button type="button" className="tim-icons icon-align-center menu" /></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.balance.map(item => (
                                                        <tr key={item.id} className="tr-field-bgcolor">
                                                            <td className="td-custom-padding">
                                                                <img src={item.image} alt="logo" className="right-space" />
                                                                {item.asset}
                                                            </td>
                                                            <td>{item.balance}</td>
                                                            <td>{item.assetName}</td>
                                                            <td>{item.value}</td>
                                                            <td><Link className="td-a-trade" to="/MJRTrade">{item.action}</Link></td>
                                                            <td><Link className="td-detail" to="/assets/detail">{item.detail}</Link></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance.balance,
        isBalanceLoading: state.balance.loading,
    };
}

const mapDispatchToProps = (dispatch) => ({
    startGetBalance: () => dispatch(startGetBalance()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);