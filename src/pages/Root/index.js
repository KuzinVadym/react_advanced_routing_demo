import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Routes from "../../routes";

import useStyles from './style';

const Root = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.body}>
                Root ->
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Root;