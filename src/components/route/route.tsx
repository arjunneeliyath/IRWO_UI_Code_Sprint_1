import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes, { routePath } from '../../constants/routes';

const Routes = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Switch>
                <>
                    <Route exact path="/">
                        <Redirect to={routePath.dashboard.index} />
                    </Route>
                    {routes.map((route) => (
                        <Route {...route} key={route.path} />
                    ))}
                </>
            </Switch>
        </Suspense>
    );
};

export default Routes;
