/*eslint-disable*/
import React from "react";

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
