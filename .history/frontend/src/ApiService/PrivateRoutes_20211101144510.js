import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import auth from './authHalper';

const PrivateRoute = ({ component: Component, ...rest }) => {
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