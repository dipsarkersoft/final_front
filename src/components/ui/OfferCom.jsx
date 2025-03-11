import React from 'react'
import imag from "../../assets/images/baner-1.png"
import { Link } from 'react-router-dom'


export const OfferCom = () => {
  return (
    <div>


<div className="container-fluid banner bg-secondary my-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <h1 className="display-3 text-white">Fresh Exotic Mango</h1>
                            <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                            <p className="mb-4 text-dark">We are dedicated to bringing you the best mangoes from the tropics. Enjoy the freshest, ripest, and juiciest mangoes delivered right to your door.</p>
                            <Link to={"/mango"} className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src={imag} className="img-fluid w-100 rounded" alt=""/>
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" 

                                              
                             >
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
