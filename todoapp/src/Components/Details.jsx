import React from "react";
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
export const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Rahul Kumar</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
            <div className="add_btn">
            <button className="btn btn-primary mx-2"><CreateIcon/></button>
                <button className="btn btn-danger"><DeleteOutlined/></button>
            </div>
        <div className="row">
        <div className="left_view col-lg-6 col-md-6 col-12">
            <img src="" alt="profile" />
            <h3 className="mt-3">
              Name : <span>Rahul Kumar</span>
            </h3>
            <h3 className="mt-3">
              Age : <span>27</span>
            </h3>
            <p className="mt-3">
              <MailIcon />
              Email : <span>Rahul@gmail.com</span>
            </p>
            <p className="mt-3">
              <WorkIcon />
              Occupation : <span>Web Developer</span>
            </p>
          </div>
          <div className="right_view col-lg-6 col-md-6 col-12">
            <p className="mt-5">
              <PhoneAndroidIcon />
              Phone : <span>999900000</span>
            </p>
            <p className="mt-3">
              <LocationOnIcon />
              Location : <span>Delhi</span>
            </p>
            <p>
              Description :{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate nam, dolores deserunt accusantium rerum voluptatem
                amet suscipit reprehenderit, aperiam fugit necessitatibus est
                dicta eos quisquam, magni distinctio aliquam aut perspiciatis.
              </span>
            </p>
          </div>
        </div>
        </CardContent>
      </Card>
    </div>
  );
};
