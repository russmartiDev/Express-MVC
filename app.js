const express = require("express");
const config = require("./config/config");
const router = require("./config/routes");
const app = express();

// use it!
app.use(router);
app.use(express.static("./assets"));
app.set('views', './views'); 
app.set('view engine', 'ejs');

// let router = require("./config/routes");
const server = app.listen(config.serverPort);





