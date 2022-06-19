class Validation
{
    email = function(emailString)
    {
        let atSymbol = emailString.indexOf("@");
        let dot = emailString.indexOf(".");

        if(emailString == "")
        {
            return "your email is empty\n";
        }
        else if(atSymbol < 1)
        {
            return "your email is not valid\n";
        } 
        else if(dot <= atSymbol + 2)
        {
            return "your email is not valid\n";
        }
        else if(dot === emailString.length - 1)
        {
            return "your email is not valid\n";
        }
        return "";
    }

    password = function(pass, cpass)
    {
        if(pass == "")
        {
            return "your password is empty\n";
        }
        else if(pass.length < 8)
        {
            return "min password length is 8\n";
        }
        else if(pass != cpass)
        {
            return "your password does not match\n";
        }

        return "";
    }

    names = function(name)
    {
        if(name == "")
        {
            return "empty names is not allowed\n";
        }
        
        for(let i =0; i< name.length; i++)
        {
            if(!isNaN(parseInt(name[i])))
            {
                return "numeric value is not allowed in names\n";
            }
        }

        return "";
    }
}
module.exports = new Validation();