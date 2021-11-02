import React from 'react';
import { Route } from 'react-router';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        
        />

    );
};

export default PrivateRoutes;