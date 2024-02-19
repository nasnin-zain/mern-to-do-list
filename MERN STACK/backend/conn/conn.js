const mongoose = require("mongoose");

const conn = async (req,res) => {
    try {
        await mongoose
    .connect("mongodb+srv://nasninzain:mernstack@cluster0.dm8sf4t.mongodb.net/")
    .then(() => {
        console.log("Connected");
    })
    } catch (error) {
        res.status(400).json({
            message: "Not connected",
        });
    }
};
conn();