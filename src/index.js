import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import HomeLayout from "layouts/Home/Home.js";
import LoginLayout from "layouts/Login/Login.js";

import "assets/scss/collectx.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const store = configStore();
const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                <Route path="/MJRTrade" render={props => <HomeLayout {...props} />} />
                <Route path="/login" render={props => <LoginLayout {...props} />} />
                <Route path="/register" render={props => <LoginLayout {...props} />} />
                <Route path="/" render={props => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin" />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
