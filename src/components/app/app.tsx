import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, CssBaseline } from '@material-ui/core';
import ErrorBoundary from '../error-boundary/error-boundary';
import Routes from '../route/route';
import Header from '../header/header';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest } from '../../constants/authentication/authConfig';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication } from '@azure/msal-react';
import { containerStyles } from './style';
import PageHeader from '../page-header/page-header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const message = 'Please Sign-in to see your Dashboard';

const App = () => {
    useMsalAuthentication(InteractionType.Redirect, loginRequest);

    const classes = containerStyles();
    return (
        <>
            <AuthenticatedTemplate>
                <Router>
                    <CssBaseline />
                    <ErrorBoundary>
                        <Header />
                    </ErrorBoundary>
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                            <PageHeader />
                        </Grid>
                        <Grid item xs={12} className={classes.pageContent}>
                            <ErrorBoundary>
                                <Routes />
                            </ErrorBoundary>
                        </Grid>
                    </Grid>
                </Router>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <h5 className={classes.cardTitle}>{message}</h5>
            </UnauthenticatedTemplate>
        </>
    );
};
export default App;
