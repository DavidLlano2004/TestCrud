import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {

    const { auth: { isLogged } } = useSelector((state) => state.persistedData);

    if (!isLogged) {

        return <Navigate to="/" />;
    }

    return children;
};

