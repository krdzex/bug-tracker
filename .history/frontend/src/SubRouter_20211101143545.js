import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoutes from './ApiService/PrivateRoutes';
import Registration from './Components/Registration/Registration';
import Main from './Main';

const SubRouter = () => {
    return (
       <Switch>
           <PrivateRoutes component={Main} />
           <Route exact path="/signin" component={Registration} />
       </Switch>
    );
};

export default SubRouter;