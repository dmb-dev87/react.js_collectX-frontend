/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components

class TopicItem extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="topic-item">
        <img className="topic-icon" src={this.props.imageSrc}></img>
        <div className="topic-info">
            <p className="topic-title">{this.props.title}</p>
            <p className="topic-top">{this.props.toptopic}</p>
        </div> 
        <p className="topic-toptime">{this.props.toptime}</p>
      </div>
      );
    }
}

export default TopicItem;
