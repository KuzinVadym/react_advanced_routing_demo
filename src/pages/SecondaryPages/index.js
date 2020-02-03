import React from 'react';
import { useParams } from "react-router-dom";

import useStyles from './style';

const SecondaryPages = () => {

    const classes = useStyles();
    let { route } = useParams();

    return(
        <div className={classes.main}>
            <h3>Requested topic ID: {route}</h3>
        </div>
    )
};

export default SecondaryPages;
