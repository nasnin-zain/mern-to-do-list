const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");



//SIGN UP

router.post("/register", async (req,res) => {
    try {
        const {email, username, password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashpassword });
        await user.save().then(() => {
            res.status(200).json({message:"Sign Up Successful"});
        });
    } catch (error) {
        res.status(200).json({message: "User already exists"});
    }
});

//SIGN IN

router.post("/signin", async (req,res) => {
    try {

        const { role } = req.body;

        const user =  await User.findOne({ email: req.body.email });
        if(!user) {
            res.status(200).json({ message: "Please Sign Up First" });
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!isPasswordCorrect) {
            res.status(200).json({ message: "Password Is Incorrect"});
        }

        if (role === "admin" && user.isAdmin) {
            res.status(200).json({message: "Admins cannot sign in as users"});
        } else if (role=== "admin" && user.isAdmin) {
            res.status(200).json({ message: "Users cannot sign in as admins." });
        } else {
        const {password, ...others } = user._doc;
        res.status(200).json({ others });
    }
} catch (error) {
        res.status(200).json({message: "User already exists"});
    }
});

module.exports = router;
