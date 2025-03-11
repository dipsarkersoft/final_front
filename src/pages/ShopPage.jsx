import React, { useEffect, useState } from "react";
import { allCategory, allProducts } from "../api/allapi.js";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { LoadingComponent } from "../components/ui/LoadingComponent.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductLoader } from "../components/ui/ProductLoader.jsx";
export const ShopPage = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedcat, setSelectedcat] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingca, setLoadingca] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getCategory = async () => {
    try {
      setLoadingca(true);
      const data = await allCategory();
      setCategory(data);
      setLoadingca(false);
    } catch (err) {
      setLoadingca(false);
    }
  };

  const handleFilter = (e) => {
    const categoryId = e.target.value;
    setSelectedcat(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await allProducts(selectedcat, searchQuery);
      // console.log(data)
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    getProducts(selectedcat);
  }, [selectedcat, searchQuery]);

  return (
    <div>
      <div className="container-fluid ShopContainer">
        <div className="row ">
          <h1 className="text-">Our All Products</h1>

          {loadingca ? (
            <LoadingComponent />
          ) : (
            <>
              <div className="col-md-12 mb-3 d-flex">
                <div className="col-md-2 p-2">
                  <h5>Categories</h5>

                  <select className="form-select" onChange={handleFilter}>
                    <option value="">All</option>
                    {category?.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-7"></div>

                <div class="col-md-3">
                  <h5>Search Keyword</h5>
                  <div class="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      class="form-control p-3"
                      placeholder="keywords"
                      // aria-describedby="search-icon-1"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <span id="search-icon-1" class="input-group-text p-3">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2"></div>
                  {products?.length == 0 ? (
                    <>
                      <p className="text-center text-danger ">
                        No Product Found
                      </p>
                    </>
                  ) : (
                    <>
                      {loading ? (
                        <>
                          <ProductLoader />
                        </>
                      ) : (
                        <>
                          {products?.map((product, index) => (
                            <>
                              <div key={index} className="col-md-3 mb-4">
                                <div className="border rounded position-relative vesitable-item">
                                  <div className="vesitable-img">
                                    <img
                                      src={product.image}
                                      className="img-fluid w-100 rounded-top"
                                      alt={product.name}
                                    />
                                  </div>
                                  <div
                                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                    style={{ top: "10px", right: "10px" }}
                                  >
                                    Mango
                                  </div>
                                  <div className="p-4 rounded-bottom">
                                    <h4>{product.name}</h4>
                                    <p>{product.description?.slice(0, 20)}</p>

                                    <p className="text-dark fs-5 fw-bold mb-0">
                                      Price: {product.price}
                                    </p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                      <Link
                                        to={`${product.id}`}
                                        className="btn 
                                                     my-2
                                                      bg-primary text-white  px-3 "
                                      >
                                        <AiOutlineShopping className="me-2 text-white" />
                                        Details
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
