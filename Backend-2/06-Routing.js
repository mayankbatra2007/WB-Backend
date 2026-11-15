// Routing

// Routing means deciding what response the server should provide for a particular URL and HTTP method.

// Eg
// "/" -> Home Page
// "/about" -> About Page
// "/products" -> Products Page

const express = require('express');
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("About Page");
});

// Products route
app.get("/products", (req, res) => {
    res.send("Products Page");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});

app.listen(3000);


// Common HTTP Methods
// Method	Purpose
// GET	Retrieve data
// POST	Create data
// PUT	Update entire resource
// PATCH	Partially update data
// DELETE	Delete data