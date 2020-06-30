/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components

import {
  Row,
  Col
} from "reactstrap";

class ChatItem extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    console.log('++++++++++++', this.props);
    return (
      <Row className="chat-item"> 
        <div>
          <img className="avatar-icon" src={this.props.user.avatar} style={{background:this.props.user.background}}></img>      
        </div>        
        <Col className="chat-chat">
          <Row>
            <Col>
              <p className="chatter-name" style={{color:this.props.user.color}}>
                {this.props.user.name}&nbsp;&nbsp;
                <span>{this.props.user.group}</span>
              </p>
              {
                this.props.quoteUser && this.props.quoteText ? (
                  <div className="chat-quote">
                    <p className="quote-name" style={{color:this.props.quoteUser.color}}>{this.props.quoteUser.name}</p>
                    <p className="quote-text">{this.props.quoteText}</p>
                  </div> ) : (
                    null
                  )
              }
              <div className="chat-text">
                <p>{this.props.chatText}</p>
              </div>
            </Col>
            <div className="chat-time">
              <span>{this.props.chatTime}</span>
            </div>
          </Row>
        </Col>
      </Row>
      );
    }
}

export default ChatItem;
