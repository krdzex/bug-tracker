import React from 'react';
import { Route } from 'react-router';
import auth from './authHalper';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} render={(props) =>{
            auth.isAuthentcated() ?
            (<Component {...props} />)
            :
            (<Component {})
        }}
        
        />

    );
};

export default PrivateRoutes;