import React from 'react';
import { Route, Switch } from 'react-router';
import Registration from './Components/Registration/Registration';
import Main from './Main';

const SubRouter = () => {
    return (
       <Switch>
           <PrivateRoutes component={Main} />
           <Route exact path="/registration" component={Registration} />
       </Switch>
    );
};

export default SubRouter;