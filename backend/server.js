const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require('cors');
const dbConfig = require("./config/dbConfig");
app.use(cors());
const port = process.env.PORT || 5000;

const contactRoute =require("./Routes/contactRoutes")
const adminRoute=require("./Routes/adminRoutes")
const projectRoute =require("./Routes/projectRoutes")

app.use("/api",contactRoute);
app.use("/api/admin",adminRoute);
app.use("/api/project",projectRoute);

const path = require("path");
__dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "..", "/client/build")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
//     })
// }


app.listen(port, '192.168.29.225' ,() => console.log(`Server is running on ${port}`));