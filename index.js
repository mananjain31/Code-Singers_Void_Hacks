const express = require("express");
const cors = require('cors')
require("./app/config/connection");
require("dotenv").config();
const route = require("./app/route");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(route);

const PORT = process.env.SERVER_PORT || 8000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});