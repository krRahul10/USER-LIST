const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();

// router.get("/", (req,res) => {
//     console.log('connect')
// })

// 1*****************Register Request*********

router.post("/register", async (req, res) => {
  // console.log(req.body)
  const { name, email, age, phone, work, add, desc } = req.body;

  if (!name || !email || !age || !phone || !work || !add || !desc) {
    return res.status(404).json({error: "Please fill the data"});
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      return res.status(404).json({error: "This user is already present"});
    } else {
      const adduser = new users({
        name, email, age, phone, work, add, desc,
      });

      await adduser.save();
      res.status(201).json({ message: "user store successfully"});
      console.log(adduser);
    }
  } catch (err) {
    // res.status(404).json(error);
    console.log("err",err)
  }
});

// 2********Get Request *********

router.get("/getdata", async (req, res) => {
  try {

    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);

  } catch (error) {

    res.status(404).json(error);

  }
});

module.exports = router;
