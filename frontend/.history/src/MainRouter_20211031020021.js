import React from 'react';
import { Switch } from 'react-router';
import ViewBugs from './Components/ViewBugs';

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/viewBugs" component={ViewBugs} />
                <Route exact path="/viewBugs" component={TransactionsDialy} />
            </Switch>
        </div>
    );
};

export default MainRouter;