import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Projects from '../pages/Projects';
import Forum from '../pages/Forum';

const Routes = () => {
    let match = useRouteMatch();
    return(
        <Switch>
            <Route path={`/projects`} component={Projects} />
            <Route path={`/forum`} component={Forum} />
            <Route path={match.path}>
                <Dashboard />
            </Route>
        </Switch>
    )
};

export default Routes;