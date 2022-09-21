import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const [getuserdata, setUserdata] = useState([]);

  //data store hoga getuserdata ke ander check karlo

  console.log("getuserdata", getuserdata);

  // data fetch yaha hoga se backend
  const getdata = async () => {
    const res = await fetch("https://crudapplication321.herokuapp.com/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log("data with frontend", data);

    if (data.status === 422 || !data) {
      console.log("error");
      alert("error");
    } else {
      setUserdata(data);
      console.log("get Data");
    }
  };

  // fetch wala function useffect me call karo

  useEffect(() => {
    getdata();
  }, []);

  const deleteUser = async (id) => {
    const res2 = await fetch(`https://crudapplication321.herokuapp.com/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deteledata = await res2.json();
    console.log(deteledata);

    if (res2.status === 422 || !deteledata) {
      console.log("error");
    } else {
      console.warn("user delete successfully");
      getdata();
    }
  };

  return (
   <>
   
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <NavLink to="/register" className="btn btn-primary">
            ADD DATA
          </NavLink>
        </div>
        <table className="table mt-3">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((elem, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.work}</td>
                <td>{elem.phone}</td>
                <td className="d-flex justify-content-around">
                  <NavLink to={`view/${elem._id}`}>
                    <button className="btn btn-success">
                      <RemoveRedEyeIcon />
                    </button>
                  </NavLink>

                  <NavLink to={`edit/${elem._id}`}>
                    {" "}
                    <button className="btn btn-primary">
                      <BorderColorIcon />
                    </button>
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(elem._id)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </>
  );
};
