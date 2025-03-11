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

//extranal
import { LoadingComponent } from "./components/ui/LoadingComponent.jsx";
import { PublicRoute } from "./context/PublicRoute.jsx";
import { UserDashboardCom } from "./components/UserDashboardCom.jsx";
import { OrderListComp } from "./components/OrderListComp.jsx";
import { ProductCreateCom } from "./components/ProductCreateCom.jsx";
import MangoListCom from "./components/MangoListCom.jsx";
import { LoadingCom } from "./components/LoadingCom.jsx";
import { CategoryCom } from "./components/CategoryCom.jsx";
import { CategoryListCom } from "./components/CategoryListCom.jsx";
import { AdminOverview } from "./components/AdminOverview.jsx";

function App() {
  const { isAuth, user } = useAuth();
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Toaster />
      <NavBarCom />

      <Routes>
        {/* {user && token ? (
          <>
            <Route path="payment/sucess/:id" element={<PaymentSucess />} />
            <Route path="payment/failed" element={<PaymentFailed />} />
           
            <Route path="/logout" element={<Navigate to="/login" />} />
            <Route path="/dashboard" element={<UserDashboardCom />}>
            <Route path="/register" element={<Navigate to="/" />}/>
            <Route path="/login"  element={<Navigate to="/" />}/>
              
              {user.account_type === "Seller" ? (
                <>
                  <Route
                    element={<PrivateRoute requiredAccountType="Seller" />}
                  >
                    <Route path="seller" element={<OrderListComp />} />

                    <Route
                      path="seller/category-create"
                      element={<CategoryCom />}
                    />

                    <Route
                      path="seller/category-list"
                      element={<CategoryListCom />}
                    />

                    <Route
                      path="seller/mango-create"
                      element={<ProductCreateCom />}
                    />

                    <Route
                      path="seller/mango-list"
                      element={<MangoListCom />}
                    />

                    <Route
                      path="seller/order-list"
                      element={<OrderListComp />}
                    />

                    <Route path="profile/" element={<Profile />} />

                    <Route
                      path="*"
                      element={<Navigate to="/dashboard/seller/" />}
                    />
                  </Route>
                </>
              ) : (
                <>
                  <Route element={<PrivateRoute requiredAccountType="Buyer" />}>
                    <Route path="my-order" element={<OrderListComp />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="profile/" element={<Profile />} />
                  </Route>
                </>
              )}
            </Route>
          </>
        ) : (
          <>


        <Route path="/login" element={<LoginPage />} navigate={"/"} />
        <Route path="/register" element={<RegisterPage />} navigate={"/"} />

          </>
        )} */}

{user && token && user?.account_type ? (
        <>
          <Route path="payment/success/:id" element={<PaymentSucess />} />
          <Route path="payment/failed" element={<PaymentFailed />} />
          <Route path="/logout" element={<Navigate to="/login" />} />
          

          {user?.account_type === "Seller" ? <>
          
            <Route path="/register" element={<Navigate to="/dashboard/seller/" />} />
            <Route path="/login" element={<Navigate to="/dashboard/seller"/>} />

          </> : <>
          
          <Route path="/register" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Navigate to="/dashboard" />} />
          
          </>

          }
    
          
          <Route path="/dashboard" element={<UserDashboardCom />}>
       
            
            
            
            {user?.account_type === "Seller" ? (
              <>
                <Route element={<PrivateRoute requiredAccountType="Seller" />}>
                  <Route path="seller" element={<AdminOverview />} />
                  <Route path="seller/profile" element={<Profile />} />
                  <Route path="seller/category-create" element={<CategoryCom />} />
                  <Route path="seller/category-list" element={<CategoryListCom />} />
                  <Route path="seller/mango-create" element={<ProductCreateCom />} />
                  <Route path="seller/mango-list" element={<MangoListCom />} />
                  <Route path="seller/order-list" element={<OrderListComp />} />
                  <Route path="*" element={<Navigate to="/dashboard/seller/" />} />
                </Route>
              </>
            ) : (
              <>
                <Route element={<PrivateRoute requiredAccountType="Buyer" />}>
                  <Route path="my-order" element={<OrderListComp />} />
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </>
            )}
          </Route>
        </>
      ) : (
        <></>
      )}

     




        <Route path="/logout" element={<Navigate to="/login" />} />

        {/* <Route path="/dashboard" element={<UserDashboardCom />}>
          {user.account_type === "Seller" ? (
            <>
               <Route element={<PrivateRoute requiredAccountType="Seller" />}>
              <Route path="seller" element={<OrderListComp />} />
             
              <Route path="seller/category-create" element={<CategoryCom />} />
             
              <Route path="seller/category-list" element={<CategoryListCom />} />
              
              <Route path="seller/mango-create" element={<ProductCreateCom />} />
              
             
              <Route path="seller/mango-list" element={<MangoListCom />} />
              
              <Route path="seller/order-list" element={<OrderListComp />} />
            
              <Route path="profile/" element={<Profile />} />


              <Route path="*" element={<Navigate to="/dashboard/seller/" />} />
 
              </Route>

            </>
          ) : (
           
           <>
           
           
           <Route element={<PrivateRoute requiredAccountType="Buyer" />}>
            <Route path="my-order" element={<OrderListComp />} /> 
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="profile/" element={<Profile />} />

            </Route>

            </>

          )}
        </Route> */}

        <Route path="/login" element={<LoginPage />} navigate={"/"} />
        <Route path="/register" element={<RegisterPage />} navigate={"/"} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/mango" element={<ShopPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="mango/:id" element={<MangoDetailsCom />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<LoadingComponent />} /> */}
        {/* <Route path="/" element={<LoadingCom />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
