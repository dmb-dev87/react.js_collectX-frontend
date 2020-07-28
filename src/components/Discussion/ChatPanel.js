/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import ChatItem from "./ChatItem";
import {
    Row,
    Col,
    Input
} from "reactstrap";

// reactstrap components

class ChatPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeTopic } = this.props;
        if (activeTopic == null) return null;

        return (
            <Row>
                <Col className="chat-panel">
                    <div className="chat-header">
                        <div>
                            <img className="header-icon" src={activeTopic.image}></img>
                        </div>
                        <div className="header-info">
                            <p className="header-title">{activeTopic.title}</p>
                            <p className="header-members">{activeTopic.members} Members | {activeTopic.onlines} Online</p>
                        </div>
                    </div>
                    <div className="chat-content">
                        {
                            activeTopic.chats == null ? (
                                null
                            ) : (
                                    activeTopic.chats.map((prop, key) => {
                                        return (
                                            <ChatItem
                                                key={key}
                                                user={prop.user}
                                                chatTime={prop.time}
                                                quoteUser={prop.quote_user}
                                                quoteText={prop.quote_text}
                                                chatText={prop.chat_text}
                                            />
                                        );
                                    }
                                    )
                                )
                        }
                    </div>
                    <div className="chat-footer">
                        <Row>
                            <Input className="chat-input" placeholder="Write a message..."></Input>
                            <img src={require("assets/img/discussion/smile.png")}></img>
                            <img src={require("assets/img/discussion/picture.png")}></img>
                        </Row>
                    </div>
                </Col>
                <div className="chat-right" ></div>
            </Row>
        );
    }
}

ChatPanel.propTypes = {
    // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
    // insde the links of this component
    activeTopic: PropTypes.object
};

export default ChatPanel;
