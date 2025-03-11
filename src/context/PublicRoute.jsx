import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";


export  const PublicRoute=() =>{
 
   const { user } = useAuth();
   const token=localStorage.getItem('token')

   
 
   return <Outlet />;



    }