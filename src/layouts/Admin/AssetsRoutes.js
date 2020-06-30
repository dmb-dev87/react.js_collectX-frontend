import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Explore from "../../views/Explore";
import MyAsset from "../../views/MyAsset";
import Assets from "../../views/Assets";

const AssetsRoutes = ({match}) => {
  return(
    <Switch>
      <Route path={match.url} exact={true} component={Assets} />
      <Route path={`${match.url}/explore`} exact={true} component={Explore} />
      <Route path={`${match.url}/my-assets`} exact={true} component={MyAsset} />
    </Switch>
  );
};

export default AssetsRoutes;