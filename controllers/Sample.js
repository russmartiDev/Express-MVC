let Controller = require("../system/Controller");
class Sample extends Controller
{
    constructor()
    {
        super();
        this.sampletModel = this.model("Sample"); //load model
    }

    index = async function(req, res)
    {
        res.render("index");
    }
    
}
module.exports = new Sample();