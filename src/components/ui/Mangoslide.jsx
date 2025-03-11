import React from "react";
import { Carousel } from "react-bootstrap";
import mango1 from "../../assets/images/mango1.jpg";
import mango2 from "../../assets/images/mango2.jpg";
import mango3 from "../../assets/images/mango3.jpg";
import { FaImages } from "react-icons/fa";

export const MangoImageSlider = () => {
  return (
    <div className="container my-5">
    
    <h3 className="fs-3 py-3"><FaImages size={48} />  Our Image Galary</h3>
    
      <div
        id="mangoCarousel"
        className="carousel  slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={mango1}
              className="d-block w-100 custom-slide"
              alt="Fresh Mangoes"
            />
            <div className="carousel-caption custom-caption">
              <h3>Organic Mangoes</h3>
              <p>Fresh & Naturally Ripened</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={mango2}
              className="d-block w-100 custom-slide"
              alt="Juicy Mangoes"
            />
            <div className="carousel-caption custom-caption">
              <h3>Juicy & Sweet</h3>
              <p>Enjoy the taste of summer</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={mango3}
              className="d-block w-100 custom-slide"
              alt="Premium Mangoes"
            />
            <div className="carousel-caption custom-caption">
              <h3>Premium Export Quality</h3>
              <p>Best hand-picked mangoes for you</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mangoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mangoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


    </div>
  );
};
