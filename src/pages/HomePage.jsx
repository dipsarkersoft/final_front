import React, { useEffect, useState } from "react";
import { allCategory, allProducts } from "../api/allapi.js";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/HeroSection.jsx";
import { Feataures } from "../components/Feataures.jsx";
import "../assets/home.css";
import { AiOutlineShopping } from "react-icons/ai";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.jpg";
import fr1 from "../assets/images/fruite4.jpg";
import fea from "../assets/images/featur-1.jpg";

import { FaLongArrowAltRight, FaUsers } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import { Testimonial } from "./Testimonial.jsx";
import { OfferCom } from "../components/ui/OfferCom.jsx";
import { MangoImageSlider } from "../components/ui/Mangoslide.jsx";
import { LoadingComponent } from "../components/ui/LoadingComponent.jsx";



export const HomePage = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedcat, setSelectedcat] = useState("");
  const [loading,setLoading]=useState(false)

  const getCategory = async () => {
    try {
      const data = await allCategory();
      setCategory(data);
    } catch (err) {
      // console.log(err);
    }
  };

  const handleFilter = (e) => {
    const categoryId = e.target.value;
    setSelectedcat(categoryId);
  };

  const getProducts = async () => {
    try {
      setLoading(true)
      const { data } = await allProducts(selectedcat);
      setProducts(data);
      setLoading(false)

    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    getProducts(selectedcat);
  }, [selectedcat]);

  return (
    <>
      <div className="container-fluid">
        <HeroSection />

        <Feataures />

       



        {/* start p */}

        <div className="container-fluid fruite">
            <div className="container bgc  py-5">
                <h1 className="mb-5 ">Our Top Products</h1>     
                
                {
                  loading ?<>
                  <LoadingComponent/>
                  </>:<>
               
               <div className="col-lg-12 mb-5">                    
                        <div className="row g-4"> 

                        {products?.slice(0, 4).map((product, index) => (
                  
                                  <div className="col-md-6 col-lg-6 col-xl-3">
                                       
                                       <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src={product.image}
                                                 className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>

                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" 
                                            style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>{product.name}</h4>
                                               
                                                <div className="">

                                                    <p className="
                                                    text-dark 
                                                    fs-6 fw-bold mb-0">BDT {product.price} / kg</p>

                                                    <Link  
                                                    to={`mango/${product.id}`}
                                                    className="btn 
                                                     my-2
                                                      bg-primary text-white  px-3 ">
                                                        <AiOutlineShopping className="me-2 " />
                                                       Details
                                                        </Link>
                                                </div>
                                            </div>
                                        </div>

                                  </div>

                          ))}
                                    
                      
                    </div>
                </div>
                

                <Link  to={"/mango"}>
          <h3 className="btn btn-danger ">
            Our all Products <FaLongArrowAltRight /></h3>
                </Link>
       
       
        </>


}
            </div>
           
           
        </div>

        {/* start e */}

        
        </div>


        {/* features start */}



        <div class="container-fluid service py-5">
            <div class="container py-5">
                <div class="row g-4 justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <a >
                            <div class="service-item bg-secondary rounded border border-secondary">
                                <img src={fea} class="img-fluid rounded-top w-100" alt=""/>
                                <div class="px-4 rounded-bottom">
                                    <div class="service-content bg-primary text-center p-4 rounded">
                                        <h5 class="text-white">Fresh Mango</h5>
                                        <h3 class="mb-0">20% OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <a >
                            <div class="service-item bg-dark rounded border border-dark">
                                <img src={fea} class="img-fluid rounded-top w-100" alt=""/>
                                <div class="px-4 rounded-bottom">
                                    <div class="service-content bg-light text-center p-4 rounded">
                                        <h5 class="text-primary">Tasty Mango</h5>
                                        <h3 class="mb-0">Free delivery</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <a >
                            <div class="service-item bg-primary rounded border border-primary">
                                <img src={fea} class="img-fluid rounded-top w-100" alt=""/>
                                <div class="px-4  rounded-bottom">
                                    <div class=" service-content bg-secondary text-center p-4 rounded">
                                        <h5 class="text-white"> Himsagor</h5>
                                        <h3 class="mb-0">Discount 30 </h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* features end */}

        <OfferCom/>

        <MangoImageSlider/>


     

      <Testimonial />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5 text-center shadow-sm">
                  <FaUsers size={50} />
                  <h4 className="mt-3 fs-4">Satisfied Customers</h4>
                  <h1 className="fw-bold">1963</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5 text-center shadow-sm">
                  <FaUsers size={50} />
                  <h4 className="mt-3 fs-4">Quality of Service</h4>
                  <h1 className="fw-bold">99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5 text-center shadow-sm">
                  <FaUsers size={50} />
                  <h4 className="mt-3 fs-4">Quality Certificates</h4>
                  <h1 className="fw-bold">33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5 text-center shadow-sm">
                  <FaUsers size={50} />
                  <h4 className="mt-3 fs-4">Available Products</h4>
                  <h1 className="fw-bold">789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
