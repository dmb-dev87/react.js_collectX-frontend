/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
    Nav,
    NavLink as ReactstrapNavLink,
    CardTitle,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";

import TopicItem from "./TopicItem";

var ps;

class TopicList extends React.Component {
    constructor(props) {
        super(props);
        this.activeTopic.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeTopic(_id) {
        return this.props.topic_id != _id ? "" : " active ";
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.refs.topiclist, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }
    linkOnClick = () => {
        document.documentElement.classList.remove("nav-open");
    };
    render() {
        const { title, topics } = this.props;
        return (
            <div className="topiclist">
                <div className="topiclist-title">
                    <CardTitle tag="h2">{title}</CardTitle>
                </div>
                <div className="search-item">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fa fa-search"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="search-text" name="search-text" placeholder="Search Discussions & Topics" />
                    </InputGroup>
                </div>
                <div className="topiclist-wrapper" ref="topiclist">
                    <Nav>
                        {topics.map((prop, key) => {
                            return (
                                <li
                                    className={
                                        this.activeTopic(prop.id) + "topic"
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={"#"}
                                        className="nav-link"
                                        activeClassName="active"
                                        onClick={() => { this.props.toggleTopic(prop.id) }}
                                    >
                                        <TopicItem
                                            imageSrc={prop.image}
                                            title={prop.title}
                                            toptime={prop.time}
                                            toptopic={prop.description}/>
                                    </NavLink>
                                </li>
                            );
                        }
                        )}
                    </Nav>
                </div>
            </div>
        );
    }
}

export default TopicList;
