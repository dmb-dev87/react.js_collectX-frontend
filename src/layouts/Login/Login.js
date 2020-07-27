import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import LoginNavbar from "components/Navbars/LoginNavbar.js";

import routes from "routes.js";

import Dashboard from "views/Dashboard";
import Login from "views/Login/Login";
import Register from "views/Login/Register";

var ps;

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
        };
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            if (navigator.platform.indexOf("Win") > -1) {
                let tables = document.querySelectorAll(".table-responsive");
                for (let i = 0; i < tables.length; i++) {
                    ps = new PerfectScrollbar(tables[i]);
                }
            }
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }
    getComponent = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].path
                ) !== -1
            ) {
                switch (routes[i].name) {
                    case 'Login':
                        return <Login fluid="fluid" />;
                    case 'Register':
                        return <Register fluid="fluid" />;
                    case 'Home':
                        return <Dashboard fluid="fluid" />;
                    default:
                        return <Dashboard fluid="fluid" />;
                }
            }
        }
        return "Brand";
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    render() {
        return (
            <>
                <div className="wrapper">
                    <div
                        className="main-panel"
                        ref="mainPanel"
                        data={this.state.backgroundColor}
                    >
                        <LoginNavbar
                            {...this.props}
                            brandText={this.getBrandText(this.props.location.pathname)}
                        />
                        {this.getComponent(this.props.location.pathname)}
                    </div>
                </div>
            </>
        );
    }
}

export default Admin;
