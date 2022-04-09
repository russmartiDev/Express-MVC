const Controller = require(`../system/controller`);
const Express = require("express");

const Router = Express.Router();

Router.get("/", Controller.loadController("users/index"));

module.exports = Router;