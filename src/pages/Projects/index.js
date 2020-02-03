import React from 'react';
import Header from './Header'
import Routes from "../../routes/project_routes";

import useStyles from './style';

const Projects = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div>
                <Routes />
            </div>
        </div>
    );
};

export default Projects;