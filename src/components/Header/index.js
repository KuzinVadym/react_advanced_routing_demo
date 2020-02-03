import React from 'react';
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';

import useStyles from './style';

const Header = () => {
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
            <Button variant="contained" color="secondary" onClick={() => redirectHandler("/projects")}>
                Projects
            </Button>
            <Button variant="contained" color="primary" onClick={() => redirectHandler("/forum")}>
                Forum
            </Button>
            <Button variant="contained" color="secondary" onClick={() => redirectHandler("/login")}>
                Log In
            </Button>
        </div>
    );
};

export default Header;