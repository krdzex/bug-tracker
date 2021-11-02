import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './authHalper';

const AdminRoutes = ({ component: Component, ...rest }) => {
    console.log(auth.isAuthentcated())
    return (
        <Route
            {...rest} render={(props) =>
                auth.isAuthentcated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />)
            }
        />)
};

export default PrivateRoute;