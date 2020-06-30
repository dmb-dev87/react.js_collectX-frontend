/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import UserItem from "./UserItem";

// const borderColor = ['#cf4d50', '#cf9d51', '#5ac4a8', '#3bc5ac', '#cb40d7'];
const noColor = ['#beb224', '#cef4f7', '#c77c14', '#60d0b2', '#60d0b2'];

class UserList extends React.Component {
  render() {
    return (
      <Card className="card-plain">
        <CardHeader>
          <Row>
            <Col className="text-left">
              <CardTitle tag="h2">{this.props.title}</CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          {
            this.props.users && this.props.users.map((item) => (
              <UserItem user={item.user} no={item.id} key={item.id} value={item.value} noColor={noColor[item.id-1]} />
            ))
          }
          <button class="btn">View Full Leaderboard</button>
        </CardBody>
      </Card>
    );
  }
}

export default UserList;