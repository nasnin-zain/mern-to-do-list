const express = require("express");
const app = express();
const cors = require("cors");

require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
// const adminRoute = require("./routes/admin-route");

const apiRoutes = require('./routes/api');
const router = require("./routes/auth");

app.use(express.json());

app.use('/api', apiRoutes);

app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello Strawberry Boba");
});

app.use("/api/v1", auth);

app.use("/api/v2", list);

// app.use("/api/admin", adminRoute);

app.listen(1000, () => {
    console.log("Server started")
})

module.exports = router;