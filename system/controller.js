class Controller
{
    loadController(path)
    {
        let splitPath = path.split("/");
        const controller = require(`../controllers/${splitPath[0]}`);

        return function(request, response)
        {
            let view = controller[splitPath[1]](request);
            response.render(view.page, view.data);
        }
        
    }

}
module.exports = new Controller();