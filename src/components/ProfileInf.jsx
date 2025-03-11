import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { authenticated_user, updateUserInf } from "../api/allapi";
import { LoadingComponent } from "./ui/LoadingComponent";
import { useAuth } from "../context/useAuth";

export const ProfileInf = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [account_type, setAccount_type] = useState("");

  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  const [loading, setLoading] = useState(false);
  const [loadingI, setLoadingI] = useState(false);

  const { user, setuserValue } = useAuth();

  const UserInf = async () => {
    try {
      setLoading(true);

      const { data } = await authenticated_user(user_id, token);

      if (data) {
        setEmail(data?.email);
        setMobileNo(data?.mobile_no);
        setLastName(data?.last_name);
        setFirstName(data?.first_name);
        setAccount_type(data?.account_type);
        setuserValue(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something Wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoadingI(true);
      const body = {
        mobileNo,
        last_name: lastName,
        first_name: firstName,
        email,
      };

      const data = await updateUserInf(token, body);
      console.log(data);

      if (data) {
        toast.success("Your Inf Update Success");
        localStorage.setItem("user", JSON.stringify(data?.data));
        setLoadingI(false);
      }
    } catch (err) {
      toast.error("Something Wrong");
      setLoadingI(false);
    }
  };





  const [image, setImage] = useState(null);

  // Default image (you can replace with your own default image URL)
  const defaultImage = "https://via.placeholder.com/150";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    UserInf();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="card shadow-sm ">
          <div className="card-body ">
            <h5 className="card-title">User Information</h5>
            {loading ? (
              <LoadingComponent />
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    
                      <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div className="image-upload-container">
                          {/* Image Preview */}
                          <img
                              src={image || defaultImage}
                            alt="Profile"
                            className="rounded-circle"
                            style={{
                              width: "150px",
                              height: "150px",
                              objectFit: "cover",
                              border: "2px solid #ddd",
                            }}
                          />
                          {/* File Input */}
                          
                        </div>
                      </div>
                    

                    <div className="col-md-7">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile No</label>
                        <input
                          type="text"
                          className="form-control"
                          value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                       
                        <input
                            type="file"
                            accept="image/*"
                              onChange={handleImageChange}
                            className="form-control mt-2"
                          />
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={loadingI}
                    type="submit"
                    className="btn btn-primary"
                  >
                    {loadingI ? (
                      <>
                        Update
                        <span className="spinnerbtn"></span>
                      </>
                    ) : (
                      " Update"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
