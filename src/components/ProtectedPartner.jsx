import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedPartner = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/loginpartner" />;
};

export default ProtectedPartner;
