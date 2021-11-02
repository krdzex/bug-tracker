import React from 'react';
import { Route, Switch } from 'react-router';
import Main from './Main';

const SubRouter = () => {
    return (
        <Switch>
            <Route exact path="/registration" component={Registration} />
        </Switch>
    );
};

export default SubRouter;