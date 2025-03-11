import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth.jsx';

const PrivateRoute = ({ requiredAccountType }) => {
  
  const { user } = useAuth();

  if (!user  ) {  
    return <Navigate to="/login" />;
  }

  if ( user.account_type !== requiredAccountType) {
    
    return <Navigate to="/login" />;
  }
  else{
    return <Outlet />;
  }
  




  
};

export default PrivateRoute;
