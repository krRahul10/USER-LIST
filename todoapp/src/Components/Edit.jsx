import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Edit = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    work: "",
    address: "",
    desc: "",
  });

  const { name, email, age, phone, work, address, desc } = inputVal;

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputVal((prev) => {
      return { ...prev, [name]: value };
    });
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
            value={address}
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
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
