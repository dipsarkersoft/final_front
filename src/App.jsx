import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBarCom } from "./components/NavBarCom.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { ShopPage } from "./pages/ShopPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./context/privetRoute.jsx";
import { Unauthorized } from "./pages/Unauthorized.jsx";
import { SellerPage } from "./pages/SellerPage.jsx";
import { useAuth } from "./context/useAuth.jsx";
import { MangoDetailsCom } from "./components/MangoDetailsCom.jsx";
import { CartPage } from "./pages/CartPage.jsx";

import PaymentFailed from "./pages/PaymentFailed.jsx";
import { PaymentSucess } from "./pages/PaymentSucess.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { Profile } from "./pages/Profile.jsx";


function App() {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Toaster />
      <NavBarCom />


      <Routes>
        {isAuth? 
        <>
         <Route path="/profile" element={<Profile/>} />
         <Route path="/logout" element={<Navigate to="/login" />} />
        </>
        :
        <></>
        }


        
        <Route path="payment/sucess/:id" element={<PaymentSucess/>} />
        <Route path="payment/failed" element={<PaymentFailed/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/logout" element={<Navigate to="/login" />} />

        <Route element={<PrivateRoute requiredAccountType="Buyer" />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<PrivateRoute requiredAccountType="Seller" />}>
          <Route path="/dashboard/Seller" element={<SellerPage />} />
        </Route>



        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/mango" element={<ShopPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="mango/:id" element={<MangoDetailsCom />} />      
        <Route path="/contact" element={<ContactPage/>} />
        
        

       


       
       


      </Routes>
    </BrowserRouter>
  );
}

export default App;
