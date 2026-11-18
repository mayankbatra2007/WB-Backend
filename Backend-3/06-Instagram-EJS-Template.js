// Creating Instagram Template

const express = require('express');
const app = express();
const path = require('path');

// Import file data
const instaData = require('./data.json');

// EJs Template Engine
app.set("view engine", "ejs");

// config views folder
app.set("views", path.join(__dirname, "views"));

app.get("/ig/:username", (req, res) => {
    // extract username from url
    const { username } = req.params;
    // get profile data
    const data = instaData[username];

    // check whether user exists
    if(!data){
        return res.status(404).send("Profile not found");
    }
    // Render Instagram page
    res.render("instagram.ejs", { data, username});
});

app.listen(3000, () => {
    console.log("Server running");
});

// Important notes
// - require("./data.json") loads JSON data as a JavaScript object in CommonJS.
// - instaData[username] dynamically accesses a property.
// - If the username doesn't exist, we return HTTP 404.
// - JSON is suitable for sample data, but databases are generally used for persistent production application data.
// - CommonJS caches the imported JSON, so editing the JSON file does not automatically reload it in an already-running server.