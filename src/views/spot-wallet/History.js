import React from "react";
import {connect} from 'react-redux';
import {startGetHistory} from "../../actions/history";
import Loading from "../../components/Utils/Loader"
import btnSearch from "../../assets/img/search.png";

// reactstrap components
import { Table,  Row,  Col } from "reactstrap";
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
                <Col xl="7" lg="12" sm="12" className="search-button-container">
                  <Row className="search-button">                    
                    <div className="search-title">
                      <img alt='...' src={btnSearch}/>
                      Search History</div>                        
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
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <Table className="tablesorter" responsive>
      <thead className="text-primary">
        <tr>
          <th width="20%">
            <div className="sort-field">
              <div>Asset</div>
              <div className="sort-buttons" onClick={() => requestSort('asset')}>
                <div className="sort-ascending"><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="20%"> 
            <div className="sort-field">
              <div>Status</div>
              <div className="sort-buttons" onClick={() => requestSort('status')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="15%"> 
            <div className="sort-field">
              <div>Amount</div>
              <div className="sort-buttons" onClick={() => requestSort('amount')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="15%"> 
            <div className="sort-field">
              <div>Date</div>
              <div className="sort-buttons" onClick={() => requestSort('date')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="30%"> 
            <div className="sort-field">
              <div>Transaction</div>
              <div className="sort-buttons" onClick={() => requestSort('transaction')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>            
          </th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item) => (
            <tr key={item.id}>
              <td>
                <img alt='...' src={item.image} witdth='49' height='49'/>
                {item.asset}
              </td>
              <td>{item.status}</td>
              <td>{item.amount + ' ' + item.asset}</td>
              <td>{item.date}</td>
              <td><a href="">{item.transaction }</a></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

const WithdrawTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <Table className="tablesorter" responsive>
      <thead className="text-primary">
        <tr>
          <th width="20%">
            <div className="sort-field">
              <div>Asset</div>
              <div className="sort-buttons" onClick={() => requestSort('asset')}>
                <div className="sort-ascending"><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="20%"> 
            <div className="sort-field">
              <div>Status</div>
              <div className="sort-buttons" onClick={() => requestSort('status')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="15%"> 
            <div className="sort-field">
              <div>Amount</div>
              <div className="sort-buttons" onClick={() => requestSort('amount')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="15%"> 
            <div className="sort-field">
              <div>Date</div>
              <div className="sort-buttons" onClick={() => requestSort('date')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>
          </th>
          <th width="30%"> 
            <div className="sort-field">
              <div>Address</div>
              <div className="sort-buttons" onClick={() => requestSort('address')}>
                <div><button className= "sort-field btn btn-link">▲</button></div>
                <div><button className= "sort-field btn btn-link">▼</button></div>
              </div>  
            </div>            
          </th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item) => (
            <tr key={item.id}>
              <td>
                <img alt='...' src={item.image} witdth='49' height='49'/>
                {item.asset}
              </td>
              <td>{item.status}</td>
              <td>{item.amount + ' ' + item.asset}</td>
              <td>{item.date}</td>
              <td><a href="">{item.transaction }</a></td>
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