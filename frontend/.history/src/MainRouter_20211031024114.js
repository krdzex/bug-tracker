import React from 'react';
import { Route, Switch } from 'react-router';
import CreateBugs from './Components/CreateBugs';
import DashBoard from './Components/DashBoard';
import ViewBugs from './Components/ViewBugs';

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route exact path="/viewBugs" component={ViewBugs} />
                <Route exact path="/createBugs" component={CreateBugs} />
            </Switch>
        </div>
    );
};

export default MainRouter;