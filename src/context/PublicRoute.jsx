import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";


export  const PublicRoute=() =>{
 
   const { user } = useAuth();
   const token=localStorage.getItem('token')

   if (user && token) {
      if(user.account_type=='Buyer')return <Navigate to="/dashboard" />;
      else if(user.account_type=='Seller')return <Navigate to="/dashboard/Seller" />
    
   }
 
   return <Outlet />;



    }