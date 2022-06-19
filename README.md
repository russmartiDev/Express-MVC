# About The Project
A simple MVC Frame work

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
<b>Add routes in config/routes</b>
<p>"Router.get("/", controller("SampleController", "SampleView"));"</p>
</br>

<b>Add Model Function</b>
<p>"name = async function(req)
    {
        let sampleData = await this.query( "SELECT sample, email FROM sample WHERE id = $1", [req.session.id]);
        return user[0];
    }"
</p>
</br>

# Notes
<p>Clickable prototype should be loaded in server</p>


