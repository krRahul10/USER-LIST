const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();

// 1*****************Register Request*********

router.post("/register", async (req, res) => {
  // console.log(req.body)
  const { name, email, age, phone, work, add, desc } = req.body;

  if (!name || !email || !age || !phone || !work || !add || !desc) {
    return res.status(422).json({ error: "Please fill the data" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    console.log(preuser);

    if (preuser) {
      return res.status(422).json({ error: "This user is already present" });
    } else {
      const adduser = new users({
        name,
        email,
        age,
        phone,
        work,
        add,
        desc,
      });

      await adduser.save();
      res.status(201).json({ message: "user store successfully" });
      console.log(adduser);
    }
  } catch (err) {
    // res.status(422).json(error);
    console.log("err", err);
  }
});

// 2********Get Request *********

router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// 3****** get Individual user router

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);

    const { id } = req.params;
    const userindividual = await users.findById({ _id: id });

    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (err) {
    console.log(err);
    res.status(422).json(err);
  }
});

// 4***************Update single user API ***********

router.patch("/updateuser/:id", async (req, res) => {
  try {
    //id of user which want to update
    const { id } = req.params;

    const updateuser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (err) {
    res.status(422).json(err);
  }
});

// 5******** delete user with id ******

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await users.findByIdAndDelete({ _id: id });

    console.log(deleteuser);

    res.status(201).json(deleteuser);

  } catch (err) {
    
    res.status(422).json(err);

  }
});
module.exports = router;
