import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem('auth-token')) {
                    return <Component />;
                }

                return <Redirect to='/login' />
            }}
        />
    );
};

export default PrivateRoute;