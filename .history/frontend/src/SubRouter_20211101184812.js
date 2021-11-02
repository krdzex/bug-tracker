import React from 'react';
import { Switch } from 'react-router';
import BlockedRoute from './ApiService/BlockedRoute';
import PrivateRoutes from './ApiService/PrivateRoutes';
import SignIn from './Components/SignIn';
import Main from './Main';

const SubRouter = () => {
    return (
        <Switch>
            <BlockedRoute exact path="/signin" component={SignIn} />
            <PrivateRoutes component={Main} />
        </Switch>
    );
};

export default SubRouter;