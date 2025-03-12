import React, { useEffect, useState } from "react";
import { allCategory } from "../api/allapi";
import { LoadingComponent } from "./ui/LoadingComponent";

export const CategoryListCom = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getCategory = async () => {
    try {
      setLoading(true);
      const data = await allCategory();
     
      if(data?.length >0){
        setCategory(data);
        setLoading(false);
      }
     

    }
     catch (err) {
      console.log(err);

      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>

      


        <div className="container my-4">
        <h2 className="text-center mb-4">Category List</h2>


        {loading ? (
                    <LoadingComponent />
                  ) : (<>
        <table className="table table-striped table-bordered">
          <thead className="table-dark text-center">
            <tr className=" text-center">
              <th>Id</th>
              <th>Name</th>
              <th>Slug</th>
              {/* <th >Action</th> */}
            </tr>
          </thead>
          <tbody>
            {category?.map((iteam, i) => (
              <>
                <tr className=" text-center" key={i}>
                  <td>{iteam.id}</td>
                  <td>{iteam.name}</td>
                  <td>{iteam.slug}</td>

                  {/* <td className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Del</button>
                  </td> */}
                </tr>
              </>
            ))}

          </tbody>
        </table>


        </>)}
      </div>
     


     

    </div>
  );
};
