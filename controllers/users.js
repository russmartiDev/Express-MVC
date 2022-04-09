class Users 
{
    index = function(request)
    {
        return {page: "index", data: {view: "views"} };
    }
    
    viewLoginPage = function()
    {
        console.log("index");
    }
    
    viewRegisterPage = function()
    {
        console.log("index");
    }
    
    processLogoff = function()
    {
        console.log("index");
    }
    
}
module.exports = new Users();