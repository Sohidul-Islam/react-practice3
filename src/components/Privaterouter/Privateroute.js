import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import useAuth from '../../Hooks/useAuth';

const Privateroute = ({ children, ...rest }) => {
    const { user } = useAuth();
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" />;
};

export default Privateroute;