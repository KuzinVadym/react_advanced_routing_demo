
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Root from '../../pages/Root';
import Login from '../../pages/Login';

import theme from '../../styles';
import useStyles from './style';

const App = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Root />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )

};

export default App;
