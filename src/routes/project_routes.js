import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Body from '../pages/Projects/Body';
import SecondaryPages from '../pages/SecondaryPages';

const Routes = () => {
    let match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/:route`} component={SecondaryPages} />
            <Route path={match.path} component={Body} />
        </Switch>
    )
};

export default Routes;