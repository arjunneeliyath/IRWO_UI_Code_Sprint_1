import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ErrorBoundary from '../error-boundary/error-boundary';
import { gridContainer } from './style';
import { email, help } from '../../assets/icons';
import routes from '../../constants/routes';

const PageHeader = () => {
    const { pathname } = useLocation();
    const path = routes.find((route) => route.path === pathname);
    const classes = gridContainer();
    return (
        <ErrorBoundary>
            <Grid container className={classes.root}>
                <Grid item xs={8} className={classes.name}>
                    {path ? path.title : 'WSO'}
                </Grid>
                <Grid item xs={2} className={classes.grid}>
                    <img className={classes.iconImage} src={email} />
                    <div className={classes.supportHelp}> WSO Support</div>
                </Grid>
                <Grid item xs={1} className={classes.grid}>
                    <img className={classes.iconImage} src={help} />
                    <div className={classes.supportHelp}> Help</div>
                </Grid>
            </Grid>
        </ErrorBoundary>
    );
};

export default PageHeader;
