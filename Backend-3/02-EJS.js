// EJS

// EJS(Embedded JS Templates) is a templating engine used with node.js and express.js to generate dynamic HTML

// Eg
// intead of this
// <h1>Hello Mayank</h1> 
// we insert dynamically insert user name
// <h1>Hello <%= name %></h1>
// if name = "Mayank"
// Hello Mayank

// use of EJS
// Genearate dynamic HTML
// Pass data from Backend to frontend
// views -> are Templates
// A View Engine in Express.js is a tool that allows us to create dynamic HTML pages by combining HTML with data coming from the server.

const express = require("express");
const app = express();

// Set EJS as our template engine
app.set("view engine", "ejs");

// route for home page
app.get("/", (req, res) => {
    // Render home.ejs from views folder
    res.render("home.ejs");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// Method	Purpose
// app.set()	Configures Express settings
// app.get()	Handles GET requests
// res.send()	Sends a response
// res.render()	Renders an EJS template
// app.listen()	Starts the server