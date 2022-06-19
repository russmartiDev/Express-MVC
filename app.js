
const express = require("express");
const config = require("./config/config");
const router = require("./config/routes");
const bodyParser = require('body-parser');

const session = require('express-session');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'ThisIsHowYouUseRedisSessionStorage',
    name: '_redisPractice',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
    // store: new redisStore({ client: redisClient }),
  }));
// }

app.use(router);

app.use(express.static("./assets"));
app.set('views', './views'); 
app.set('view engine', 'ejs');

const server = app.listen(config.serverPort);





