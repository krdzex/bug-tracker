import React from 'react';
import { Switch } from 'react-router';
import DashBoard from './Components/DashBoard';
import ViewBugs from './Components/ViewBugs';

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={DashBoard} />
                <Route exact path="/viewBugs" component={ViewBugs} />
                <Route exact path="/createBugs" component={TransactionsDialy} />
            </Switch>
        </div>
    );
};

export default MainRouter;