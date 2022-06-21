# About The Project
A simple MVC Framework using express

# Built With
<p>Node Js</p>
<p>Express Js</p>
<p>EJS</p>
<p>Redis</p>
<p>MySql</p>

# How to run?
<p>Open terminal in this folder path</p>
<p>Type "node install"</p>
<p>setup configuration in config/config.js</p>
<p>Type in Terminal node app.js<p>

# Documentation
<b>config/config.js</b>
```javascript
    {
        this.serverPort = "5000"; //sever port
        this.dbconf = //database config
        {
            host: "localhost",
            user: "root",
            password: "1234",
            database: "express2",
            port: 3306
        };
        this.session = true;
    }
```

<b>Add routes in config/routes</b>
```javascript
Router.get("/", controller("SampleController", "SampleView"));
```
</br>

<b>Add Model in models/modelname</b>
```javascript
name = async function(req)
    {
        let sampleData = await this.query( "SELECT sample, email FROM sample WHERE id = $1", [req.session.id]);
        return sampleData[0];
    }
```
</br>

<b>Use Model in controller</b>
```javascript
this.sampletModel = this.model("Sample");
```
</br>

<b>Add controller in controllers/controllerName</b>
```javascript
index = async function(req, res)
    {
        res.render("viewName");
    }
```
</br>

<b>Use Model Function in controller</b>
```javascript
let newData = await this.sampleModel.sample(req);
```


