import React from 'react';

import useStyles from './style';

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                Dashboard
            </div>
        </div>
    );
};

export default Dashboard;