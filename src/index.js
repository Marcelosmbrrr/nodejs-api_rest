// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// Custom
const ApiRoutes = require("./routes/api");

// Enable CORS for origin
app.use(cors({
    origin: "localhost:8081"
}));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api", ApiRoutes);

// Init app
app.listen(8081);