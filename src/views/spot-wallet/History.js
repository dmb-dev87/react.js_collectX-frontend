import React from "react";
import { connect } from 'react-redux';
import { startGetHistory } from "../../actions/history";
import Loading from "../../components/Utils/Loader"
import btnSearch from "../../assets/img/search.png";

// reactstrap components
import { Table, Row, Col, Input } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// core components

class History extends React.Component {
    constructor(props) {
        super(props);
        this.props.startGetHistory();
        this.state = {
            history: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            history: nextProps.history
        })
    }

    render() {
        return (
            <div className={this.props.fluid ? "content-fluid" : "content"}>
                {
                    this.props.isHistoryLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
                }
                <Row className="history_page">
                    <Col xl="12">
                        <Tabs>
                            <Row className="history-title">
                                <Col xl="6" lg="12">
                                    History
                                </Col>
                            </Row>
                            <Row className="history-cates">
                                {/* <Col xl="5" lg="12" sm="12" className="history-cate"> */}
                                <Col className="history-cate">
                                    <TabList>
                                        <Tab>Deposit</Tab>
                                        <Tab>Withdraw</Tab>
                                        <Tab disabled className="react-tabs__tab--selected fiat">Fiat</Tab>
                                    </TabList>
                                </Col>
                                <Col className="search-button-container">
                                    <Row className="search">
                                        <Input placeholder="Search History" className="input" />
                                        <img src="/search.png" alt="logo" className="icon-search" />
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="table-row">
                                <Col md="12">
                                    <TabPanel>
                                        <div id="table">
                                            <DepositTable
                                                products={this.state.history}
                                            />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div id="table">
                                            <WithdrawTable
                                                products={this.state.history}
                                            />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                    </TabPanel>
                                    <TabPanel>
                                    </TabPanel>
                                </Col>
                            </Row>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history.history,
        isHistoryLoading: state.history.loading,
    };
};

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const DepositTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    return (
        <Table className="tablesorter" responsive>
            <thead className="text-primary">
                <tr>
                    <th width="20%">
                        <div className="sort-field">
                            <button type="button" className="btn-none left-space">Asset
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="20%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Status
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="15%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Amount
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="15%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Date
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="30%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Transaction
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img alt='...' src={item.image} witdth='49' height='49' />
                                {item.asset}
                            </td>
                            <td>{item.status}</td>
                            <td>{item.amount + ' ' + item.asset}</td>
                            <td>{item.date}</td>
                            <td><a href="">{item.transaction}</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
};

const WithdrawTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    return (
        <Table className="tablesorter" responsive>
            <thead className="text-primary">
                <tr>
                    <th width="20%">
                        <div className="sort-field">
                            <button type="button" className="btn-none left-space">Asset
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="20%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Status
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="15%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Amount
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="15%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Date
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                    <th width="30%">
                        <div className="sort-field">
                            <button type="button" className="btn-none">Address
                                <div className="icon-sort-up"> </div>
                                <div className="icon-sort-down"> </div>
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img alt='...' src={item.image} witdth='49' height='49' />
                                {item.asset}
                            </td>
                            <td>{item.status}</td>
                            <td>{item.amount + ' ' + item.asset}</td>
                            <td>{item.date}</td>
                            <td><a href="">{item.transaction}</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startGetHistory: () => dispatch(startGetHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);