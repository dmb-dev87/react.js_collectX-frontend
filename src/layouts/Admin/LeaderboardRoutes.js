import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Discussion from "views/Discussion.js";
import Leaderboard from "views/Leaderboard.js";

const LeaderboardRoutes = ({ match }) => {
    return (
        <Switch>
            <Route path={match.url} exact={true} component={Discussion}><Redirect to="/community/discussion"/></Route>
            <Route path={`${match.url}/discussion`} exact={true} component={Discussion} />
            <Route path={`${match.url}/leaderboard`} exact={true} component={Leaderboard} />
        </Switch>
    );
};

export default LeaderboardRoutes;