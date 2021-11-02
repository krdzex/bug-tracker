import React from 'react';
import { Switch } from 'react-router';

const MainRouter = () => {
    return (
        <div>
            <Switch>
            <Route exact path="/" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/transactions/dialy" component={TransactionsDialy} />
            </Switch>
        </div>
    );
};

export default MainRouter;