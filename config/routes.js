const controller = require(`../system/loader`).controller; //controller loader
const Express = require("express");

const Router = Express.Router();

Router.get("/", controller("Sample", "index"));

module.exports = Router;