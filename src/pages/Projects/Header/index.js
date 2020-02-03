import React from 'react';
import {Link, useHistory, useRouteMatch} from 'react-router-dom';
import {Button} from '@material-ui/core';

import useStyles from './style';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch();

    function redirectHandler(payload) {
        history.push(`${match.url}/${payload}`);
    }

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={() => redirectHandler("props_vs_state")}>
                Props v. State
            </Button>
        </div>
    );
};

export default Header;