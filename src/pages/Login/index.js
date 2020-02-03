import React from 'react';
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';

import useStyles from './style';

const Login = () => {
    const classes = useStyles();

    let history = useHistory();

    function redirectHandler(payload) {
        history.push(payload);
    }

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={() => redirectHandler("/")}>
                Dashboard
            </Button>
        </div>
    );
};

export default Login;