import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Deposit from "views/Deposit.js";
import Balance from "views/spot-wallet/Balance.js";
import History from "views/spot-wallet/History.js";
import Withdraw from "views/Withdraw";

const SpotWalletRoutes = ({match}) => {
  return(
    <Switch>
      <Route path={match.url} exact={true} component={Balance} />
      <Route path={`${match.url}/balance`} exact={true} component={Balance} />
      <Route path={`${match.url}/deposit`} exact={true} component={Deposit} />
      <Route path={`${match.url}/withdraw`} exact={true} component={Withdraw} />
      <Route path={`${match.url}/history`} exact={true} component={History} />
    </Switch>
  );
};

export default SpotWalletRoutes;