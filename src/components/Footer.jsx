import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import sslimage from "../assets/images/sslcommerz-banner.png"
import toast from "react-hot-toast";
import { useState } from "react";


const Footer = () => {
    const [email, setEmail] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!email)
    {
      toast.error("Please Enter a Valid Email")
    }
    else{
      toast.success("Thanks For Subscribe")
      setEmail("")
    }
  }
  
  return (


    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
  <div className="container py-5">
    <div
      className="pb-4 mb-4"
      style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
    >
      <div className="row g-4">
        <div className="col-lg-3">
          <Link href="#">
            <h1 className="text-primary mb-0">Fruitables</h1>
            <p className="text-secondary mb-0">Fresh products</p>
          </Link>
        </div>
        <div className="col-lg-6">
          <div className="position-relative mx-auto">
           <form onSubmit={handleSubmit} >
            <input
              className="form-control border-0 w-100 py-3 px-4 rounded-pill"
              type="email"
              placeholder="Your Email"
              // required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
              style={{ top: 0, right: 0 }}
            >
              Subscribe Now
            </button>




            </form>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="d-flex justify-content-end pt-3">
            <Link
              className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
              href=""
            >
              <FaGithub />
            </Link>
            <Link
              className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
              href=""
            >
              <FaFacebookF />
            </Link>
            <Link
              className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
              href=""
            >
              <FaInstagram />
            </Link>
            <Link
              className="btn btn-outline-secondary btn-md-square rounded-circle"
              href=""
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Footer content */}
    <div className="row g-5">
      <div className="d-flex footerall    flex-wrap justify-content-center">
        {/* Image Section */}
        <div className="col-lg-4 col-md-12   d-flex justify-content-center align-items-center"
        >
          <img className="ftrimg  img-fluid" src={sslimage} alt="SSL image" />
        </div>

        {/* Account Section */}
        <div className="col-lg-4 footerchild col-md-6 ">
          <div className="d-flex   flex-column text-start footer-item">
            <h4 className="text-white mb-3">Account</h4>
            <Link className="btn-link" to='/'>My Account</Link>
            <Link className="btn-link" to='/shop'>Shop details</Link>
            <Link className="btn-link" to='/cart'>Cart</Link>
            <Link className="btn-link" to='/'>Order History</Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-lg-4 footerchild  col-md-6">
          <div className="footer-item ">
            <h4 className="text-white mb-3">Contact</h4>
            <p>Address: Rajshahi, Bangladesh</p>
            <p>Email: rajshahiram@gmail.com</p>
            <p>Phone: +01303053626</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Footer;
