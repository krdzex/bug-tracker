import React from 'react';
import { Redirect, Route } from 'react-router';
import auth from './authHalper';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} render={(props) =>{
            auth.isAuthentcated() ?
            (<Component {...props} />)
            :
            (<Redirect to={{pathname: "/signin",state: }})
        }}
        
        />

    );
};

export default PrivateRoutes;