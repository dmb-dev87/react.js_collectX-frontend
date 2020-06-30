import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import {connect} from 'react-redux';
import LeaderboardHeader from "../components/Leaderboard/LeaderboardHeader";
import UserList from "../components/Leaderboard/UserList";

import {startGetActiveUsers} from "../actions/leaderboard";
import {startGetLargestHoldings} from "../actions/leaderboard";

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
  UncontrolledTooltip
} from "reactstrap";

// core components
class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
      this.props.startGetActiveUsers();
      this.props.startGetLargestHoldings();
      this.state = {
        activeUsers: [],
        largestHoldings: [],
      };
  }
    
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeUsers: nextProps.activeUsers,
      largestHoldings: nextProps.largestHoldings
    })
  }
  
  render() {
    return (
      <>
      <div className={this.props.fluid ? "content-fluid leaderboard" : "content leaderboard"}>
        <Row>
          <LeaderboardHeader title="Leaderboard" description="View the most active traders & largest collectors on CollectX" />
        </Row>
        <Row id="leaderboard_list">
          <Col lg="12">
            <Row>
              <Col xl="6" lg="12">
                <UserList title="Most Active Users" users={this.state.activeUsers} />
              </Col>
              <Col xl="6" lg="12">
                <UserList title="Largest Holdings" users={this.state.largestHoldings} />
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
    activeUsers: state.leaderboard.activeUsers,
    isActiveUsersLoading: state.leaderboard.loading,
    largestHoldings: state.leaderboard.largestHoldings,
    isLargestHoldingsLoading: state.leaderboard.loading,
  };
};
    
const mapDispatchToProps = (dispatch) => ({
  startGetActiveUsers: () => dispatch(startGetActiveUsers()),
  startGetLargestHoldings: () => dispatch(startGetLargestHoldings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
