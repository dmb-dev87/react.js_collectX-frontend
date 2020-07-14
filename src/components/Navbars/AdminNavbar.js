import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { startGetMarkets } from "../../actions/markets"


// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  Row,
  Col,
  Table
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.props.startGetMarkets();
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "bg-dark",
      markets: [],
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      markets: nextProps.markets
    })
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-dark"
      });
    } else {
      this.setState({
        color: "bg-dark"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-white"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch
    });
  };
  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute position-fixed")}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand href="#" onClick={e => e.preventDefault()}>
                <Link to="/home">
                <img alt="..." src={require("assets/img/collectx.png")} style={{width: '150px'}} />
                </Link>
                <Collapse navbar isOpen={this.state.collapseOpen}>
                  <Nav navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        caret
                        color="default"
                        data-toggle="dropdown"
                        nav
                      >
                        <div className="markets">
                          <h2>Markets</h2>
                          <div className="triangle-down"></div>
                        </div>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-navbar" right tag="ul" className="market_menu">
                        <NavLink tag="li" style={{padding: 0}}>
                          <DropdownItem className="nav-item">
                            <Row>
                              <img className="img-icon" src={require("assets/img/markets-icon.png")} ></img>
                              <h2 className="unit-icon">USD</h2>
                            </Row>
                          </DropdownItem>
                        </NavLink>
                        <NavLink tag="li" style={{padding: 0}}>
                          <DropdownItem className="nav-item table-body">
                            <Table className="table-border custom_scroll" responsive>
                              <thead>
                                <tr>
                                  <td>Pair</td>
                                  <td>Price</td>
                                  <td>Change</td>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  this.state.markets.map((item, index) => (
                                    <tr className="tr-field-bgcolor">
                                      <td><h2>{item.pair}</h2></td>
                                      <td><h2>{item.price}</h2></td>
                                      {(index % 2 == 0) ?
                                        <td><h2 className="color-green">{item.change}</h2></td>
                                        :
                                        <td><h2 className="color-red">{item.change}</h2></td>
                                      }
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </Table>
                          </DropdownItem>
                        </NavLink>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <h2>Wallet</h2>
                    <div className="triangle-down"></div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <Link to="/spot-wallet/balance">
                        <DropdownItem className="nav-item">
                          Balance                        
                        </DropdownItem>
                      </Link>
                    </NavLink>
                    <NavLink tag="li">                      
                      <Link to="/spot-wallet/deposit">
                        <DropdownItem className="nav-item">
                          Deposit
                        </DropdownItem>
                      </Link>
                    </NavLink>
                    <NavLink tag="li">
                      <Link to="/spot-wallet/withdraw">    
                        <DropdownItem className="nav-item">                      
                          Withdraw
                        </DropdownItem>
                      </Link>
                    </NavLink>
                    <NavLink tag="li">
                      <Link to="/spot-wallet/history">   
                        <DropdownItem className="nav-item">
                        History
                        </DropdownItem>
                      </Link>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <h2>Orders</h2>
                    <div className="triangle-down"></div>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav className="account">
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <div className="photo">
                      <img alt="..." src={require("assets/img/a1.png")} />
                      <div>
                        <h2>Welcome back</h2>
                        <h2>Dallas Rushing</h2>
                      </div>
                    </div>
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Profile</DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Settings</DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Log out</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalSearch}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markets: state.markets.markets,
  };
}

const mapDispatchToProps = (dispatch) => ({
  startGetMarkets: () => dispatch(startGetMarkets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar);
// export default AdminNavbar;
