import React from "react";
export const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button className="btn btn-primary">ADD DATA</button>
        </div>
        <table class="table mt-3">
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              {/* <td></td> */}
              <td>@mdo</td>
              <td>999999999</td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa-solid fa-pen-nib"></i></button>
                <button className="btn btn-danger"><i class="fa-sharp fa-solid fa-trash"></i></button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
