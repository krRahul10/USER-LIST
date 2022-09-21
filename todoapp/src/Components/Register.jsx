import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    work: "",
    add: "",
    desc: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputVal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age, phone, work, add, desc } = inputVal;
    const res = await fetch("/register",{
      method: "POST",
      headers: {
        // "Content-Type": "application/json"
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, age, phone, work, add, desc
      }),
    });

    const data = await res.json();
    console.log("data with frontend", data);

    if (data.status === 404 || !data) {

      console.log("error");
      alert("error");

    } else {

      alert("data added successfully");
      console.log("data added");

    }
  };
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
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
            value={inputVal.name}
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
            value={inputVal.email}
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
            value={inputVal.age}
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
            value={inputVal.phone}
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
            value={inputVal.work}
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
            name="add"
            value={inputVal.add}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Description
          </label>
          <textarea name="desc" value={inputVal.desc} onChange={handleChange} />
        </div>

        <div className="col-12">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
