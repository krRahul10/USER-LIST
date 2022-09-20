import React from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Email
          </label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Age
          </label>
          <input type="number" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Phone
          </label>
          <input type="number" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Work
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Address
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Description
          </label>
          {/* <input type="password" class="form-control" id="inputPassword4" /> */}
          <textarea />
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
