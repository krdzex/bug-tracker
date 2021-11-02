import React from 'react';
import { Route, Switch } from 'react-router';
import SignIn from './Components/SignIn';
import Main from './Main';

const SubRouter = () => {
    return (
        <Switch>
            <Route exact path="/signIn" component={SignIn} />
        </Switch>
    );
};

export default SubRouter;