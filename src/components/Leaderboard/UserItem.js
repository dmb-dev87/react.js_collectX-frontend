/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
// import { Card, CardHeader, CardBody, CardTitle, Row, Col, NavItem, NavLink } from "reactstrap";

class UserItem extends React.Component {
  render() {
    return (
      <div className="user_item">
        <div className="user-info">
          <img className="img-avatar" src={this.props.user.avatar} style={{borderColor: this.props.user.color}}></img>
          <span>{this.props.user.name}</span>
          <div className="user-value">
              <p style={{color: this.props.noColor}}>#{this.props.no}</p>
              <p>${this.props.value}</p>
          </div> 
        </div>               
      </div>);
    }
}

export default UserItem;
