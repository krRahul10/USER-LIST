import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log("details page", getuserdata)

  const nevigate = useNavigate()

  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    work: "",
    add: "",
    desc: "",
  });

  const { name, email, age, phone, work, add, desc } = inputVal;

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputVal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { id } = useParams();
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`https://crudapplication321.herokuapp.com/getuser/${id}`, {
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
      setInputVal(data);
      console.log("get Data");
    }
  };

  // fetch wala function useffect me call karo

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const {name, age, work, phone, desc,add, email} = inputVal
    const res2 = await fetch(`https://crudapplication321.herokuapp.com/updateuser/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,age,add,phone,desc,work
      })

    })
    const data2 = await res2.json()
    console.log(data2)

    if(res2.status ===422 || !data2){
      alert("fill the details")
    }else {
      alert("data added in edit")
      nevigate('/')
    }

  };
  return (
    <div className="container">
      <h1>Edit Page</h1>
      <NavLink to="/">Home 11</NavLink>

      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="inputEmail4"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPassword4"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Work
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            name="work"
            value={work}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            name="address"
            value={add}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Description
          </label>
          <textarea name="desc" value={desc} onChange={handleChange} />
        </div>

        <div className="col-12">
          <button
            type="submit"
            onClick={updateuser}
            className="btn btn-warning"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
