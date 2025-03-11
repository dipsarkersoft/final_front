import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth.jsx";
import { LoadingCom } from "../components/LoadingCom.jsx";

export const LoginPage = () => {


  const navigate = useNavigate();
  const { loginUser, getAuthUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null); 


  const sellerLog = async () => {
    setUsername("seller");
    setPassword("12345ddd");
  
  };
  
  const buyerLog = async () => {
    setUsername("buyer");
    setPassword("12345ddd");
  
    
  };
  


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username) {
      toast.error("Username Needed");
      return;
    }
    if (!password) {
      toast.error("Password Needed");
      return;
    }

    setLoading(true);

    try {
      const res = await loginUser(username, password);

      if (res) {
        const userData = await getAuthUser(); 
        if (userData) {
          setAuthUser(userData); 
          toast.success("Login Sucess");
        } 
        else {
          toast.error("Failed to fetch user details.");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } 
    catch (error) {
      
      toast.error("Something went wrong!");
    }
     finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    if (authUser) {
      
      if (authUser?.account_type === "Buyer") {
        navigate("/dashboard");
      } else if (authUser?.account_type === "Seller") {
        navigate("/dashboard/Seller");
      }
    }
  }, [authUser, navigate]); 
  


  return (
    <div className="container ShopContainer">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            {loading ? (
              <>
                <LoadingCom />
              </>
            ) : (
              <>
                <div className="card-body">
                  <h3 className="text-center mb-4">Login</h3>
                  <div className="m-3">

                  <button onClick={sellerLog} className="btn  btn-success">Seller</button>
                  <button onClick={buyerLog} className="btn ms-3 btn-danger">User</button>
                  </div>
                  

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="Enter Your Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      onClick={handleLogin}
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Login
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    Don't have an account?{" "}
                    <Link to={"/register"}> Sign up</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
