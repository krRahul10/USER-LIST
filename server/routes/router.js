const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();

// router.get("/", (req,res) => {
//     console.log('connect')
// })

router.post("/register", async (req, res) => {
  // console.log(req.body)
  const { name, email, age, phone, work, add, desc } = req.body;

  if (!name || !email || !age || !phone || !work || !add || !desc) {
    res.status(404).send("Please fill the data");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(404).send("This user is already present");
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
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
