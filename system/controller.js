class Controller
{
    constructor()
    {
        this.executeTime = 0;
        this.model = require("./Loader").model;
    }
}

module.exports = Controller;