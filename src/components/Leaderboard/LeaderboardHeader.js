/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class LeaderboardHeader extends React.Component {
    render() {
        return (
            <div className="header gradient_background" xl="12">
                <h2>{this.props.title}</h2>
                <h4>{this.props.description}</h4>
            </div>
        );
    }
}

export default LeaderboardHeader;
