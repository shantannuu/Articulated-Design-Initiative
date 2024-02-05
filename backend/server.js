const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const morgan = require('morgan');
app.set('trust proxy', 1);
const cors = require('cors');
const dbConfig = require("./config/dbConfig");
app.use(cors());
const port = process.env.PORT || 5000;
app.use(morgan('combined'));
const contactRoute = require("./Routes/contactRoutes")
const adminRoute = require("./Routes/adminRoutes")
const projectRoute = require("./Routes/projectRoutes")
const userRoute = require("./Routes/usersRoutes")
app.use("/api", contactRoute);
app.use("/api/admin", adminRoute);
app.use("/api/project", projectRoute);
app.use("/api/user",userRoute);


app.use((req, res, next) => {
    req.visitorData = {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        referrer: req.get('Referrer'),
        userId: req.user ? req.user.id : null,
        // You can add more fields based on your needs
    };
    next();
});

app.use('/track-visit', async (req, res) => {
    try {
        // Create a new user visit record
        const visitTimestamp = Date.now();
        const visitDate = new Date(visitTimestamp);

        // Get time in IST
        const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const visitTime = visitDate.toLocaleTimeString('en-US', options);
        const { deviceType, screenResolution, language, browser , pageUrl } = req.body;
        const visitData = { ...req.visitorData,pageUrl, browser, deviceType, screenResolution, language , date: visitDate,
            time: visitTime, };
        const newVisit = new Users(visitData);
        await newVisit.save();

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

const path = require("path");
const Users = require('./models/Users');
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "/frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "frontend", "build", "index.html"))
    })
}


// app.listen(port, '192.168.29.225' ,() => console.log(`Server is running on ${port}`));
// app.listen(port, '172.20.10.4', () => console.log(`Server is running on ${port}`));
app.listen(port, () => console.log(`Server is running on ${port}`));