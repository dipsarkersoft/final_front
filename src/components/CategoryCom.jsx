import React, { useState } from "react";
import { createCategory } from "../api/allapi";
import toast from "react-hot-toast";

export const CategoryCom = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setSlug(newName.toLowerCase().replace(/\s+/g, "-"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {

        if(!name && !slug){
            toast.error("All Field Required")
            return
        }
      const body = {
        name,
        slug,
      };
      setLoading(true);
      const data = await createCategory(token, body);

      if (data?.status == 200) {
        setLoading(false);
        toast.success("Category created successfully!");

        setName("");
        setSlug("");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error creating category!");
    }
  };

  return (
    <div className="container ShopContainer">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Category Form</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter category name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    value={slug}
                    readOnly
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-50"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      Submitting
                      <span className="spinnerbtn"></span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
