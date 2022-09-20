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
    address: "",
    desc: "",
  });

  const { name, email, age, phone, work, address, desc} = inputVal
  

  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setInputVal((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="inputEmail4"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Phone
          </label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Work
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            name="work"
            value={work}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Description
          </label>
          {/* <input type="password" class="form-control" id="inputPassword4" /> */}
          <textarea
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
