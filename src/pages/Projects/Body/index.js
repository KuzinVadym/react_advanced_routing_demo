import React from 'react';

import useStyles from './style';

const Body = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Project Body
        </div>
    );
};

export default Body;