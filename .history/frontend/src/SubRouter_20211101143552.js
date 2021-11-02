import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoutes from './ApiService/PrivateRoutes';
import SignIn from './Components/SignIn';
import Main from './Main';

const SubRouter = () => {
    return (
       <Switch>
           <PrivateRoutes component={Main} />
           <Route exact path="/signin" component={SignIn} />
       </Switch>
    );
};

export default SubRouter;