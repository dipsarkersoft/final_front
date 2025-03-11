import React, { useEffect, useState } from "react";
import { allCategory, createProduct, imageUpload } from "../api/allapi.js";
import toast from "react-hot-toast";
import axios from "axios";
import { LoadingComponent } from "./ui/LoadingComponent.jsx";

export const ProductCreateCom = () => {
  const token = localStorage.getItem("token");

  const [category, setCategory] = useState([]);
  const [selcategory, setSelcategory] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingca, setLoadingca] = useState(false);

  const loadCategory = async () => {
    try {
      setLoadingca(true);
      const data = await allCategory();
      if (data) {
        setCategory(data);
        setLoadingca(false);
      }
    } catch (err) {
      setLoadingca(false);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelcategory(categoryId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const image = form.get("image");
    const name = form.get("name");
    const description = form.get("description");
    const price = form.get("price");
    const quantity = form.get("quantity");

    if (
      !name ||
      !description ||
      !price ||
      !quantity ||
      !image ||
      !selcategory
    ) {
      toast.error("All fields are required!");
      return;
    }

    const maxSize = 2 * 1024 * 1024; 
    if (image.size > maxSize) {
      toast.error("Image size should not exceed 2MB!");
      return;
    }

    try {
      setLoading(true);
      const body = new FormData();
      body.append("image", image);
      const { data } = await imageUpload(body);
      const imgurl = data.data.url;
      const sendData = {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        image: imgurl,
        categories: selcategory,
      };

      const datares = await createProduct(token, sendData);
      // console.log(datares.status)
      if (datares.status) {
        toast.success("Product Create Sucess");
        setLoading(false);
        e.target.reset();
        setSelcategory("");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <div>
      <div className="container my-4">
        <div className="row bg-light justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Create Product</h2>
            {loadingca ? (
              <LoadingComponent />
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter product name"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">
                      Image
                    </label>
                    <input
                      required={true}
                      type="file"
                      name="image"
                      className="form-control"
                      accept="image/*"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      name="description"
                      placeholder="Enter product description"
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Enter product price"
                      className="form-control"
                      min={1}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Enter quantity"
                      className="form-control"
                      min={0}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="categories" className="form-label">
                      Categories
                    </label>

                    <select
                      className="form-select"
                      onChange={handleCategoryChange}
                    >
                      <option value="">All</option>
                      {category?.map((item, i) => (
                        <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="d-grid">
                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-primary"
                    >
                      {loading ? (
                        <>
                          Create
                          <span className="spinnerbtn"></span>
                        </>
                      ) : (
                        " Create "
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
