import React from 'react'
import '../assets/hero.css'
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.jpg";

export const HeroSection = () => {
  return (
   
    <div className="container-fluid  hero-header mt-5 py-5 mb-5 ">
    <div className="py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-12 col-lg-7">
          <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
          <h1 className="mb-5 display-3 text-primary">
            Organic Veggies & Fruits Foods
          </h1>
          <div className="position-relative mx-auto">
            <input
              className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
              type="text"
              placeholder="Search"
            />
            <button
              type="submit"
              className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
              style={{ top: "0", right: "25%" }}
            >
              Submit Now
            </button>
          </div>
        </div>
        <div className="col-md-12 col-lg-5">
          <div
            id="carouselExample"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active rounded">
                <img
                  src={hero1}
                  className="img-fluid w-100 h-100 bg-secondary rounded"
                  alt="First slide"
                />
                <a
                  href="#"
                  className="btn px-4 py-2 text-white rounded"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "25px",
                    background:
                    "linear-gradient(rgba(223, 250, 206, 0.55), rgba(255, 182, 36, 0.15))",
                  }}
                >
                  Fruits
                </a>
              </div>
              <div className="carousel-item rounded">
                <img
                  src={hero2}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
                <a
                  href="#"
                  className="btn px-4 py-2 text-white rounded"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "25px",
                    background:
                      "linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))",
                  }}
                >
                  Vegetables
                </a>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>

  )
}
