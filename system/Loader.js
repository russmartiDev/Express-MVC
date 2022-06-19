class Loader
{
    controller = function(path, callback)
    {   

        
        return function(request, response)
        {
            const profiler = require(`../config/config`).profiler;
            let millies = new Date().getTime();
            const controller = require(`../controllers/${path}`);
            controller[callback](request, response);
            
            // if(profiler){
            //     let milliess = new Date().getTime();
            //     console.log("POST:");
            //     console.log(request.body);
            //     console.log("GET:")
            //     console.log(request.params);
            //     console.log("SESSION:")
            //     console.log(request.session);
            //     console.log("Exec time" + ((milliess - millies) / 1000) +"s");
            // } 
        } 
    }
    
    model = function(path)
    {
        const model = require(`../models/${path}`);
        
        return model;
    }

}
module.exports = new Loader();