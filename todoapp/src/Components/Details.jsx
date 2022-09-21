import React, { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteOutLine from "@mui/icons-material/DeleteOutlined";
import CreateIcon from "@mui/icons-material/Create";
import { Card } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WorkIcon from "@mui/icons-material/Work";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import { NavLink, useParams } from "react-router-dom";

export const Details = () => {
  // ye wo id h jo Hum URL me send karte h and useParam se isko get kr sakte h
  const { id } = useParams();
  console.log(id);

  const [getuserdata, setUserdata] = useState([]);
  console.log("details page", getuserdata);
  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
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

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Rahul Kumar</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/edit/${getuserdata._id}`}>
            <button className="btn btn-primary mx-2">
              <CreateIcon />
            </button>
            </NavLink>
            <button className="btn btn-danger">
              <DeleteOutlined />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="" alt="profile" />
              <h3 className="mt-3">
                Name : <span>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age : <span>27</span>
              </h3>
              <p className="mt-3">
                <MailIcon />
                Email : <span>{getuserdata.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation : <span>{getuserdata.work}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <PhoneAndroidIcon />
                Phone : <span>{getuserdata.phone}</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                Location : <span>Delhi</span>
              </p>
              <p>
                Description :{" "}
                <span>
                  {getuserdata.desc}
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate nam, dolores deserunt accusantium rerum voluptatem
                amet suscipit reprehenderit, aperiam fugit necessitatibus est
                dicta eos quisquam, magni distinctio aliquam aut perspiciatis. */}
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
