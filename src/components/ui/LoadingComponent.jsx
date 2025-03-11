import React from "react";
import her01 from "../../assets/images/hero1.png";
import her02 from "../../assets/images/hero2.jpg";

export const LoadingComponent = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    
    </div>
  );
};
