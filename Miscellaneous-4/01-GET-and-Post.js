// What is an HTTP Request?
// Whenever a client (browser/frontend) communicates with a server (backend), it sends an HTTP request.

// For example:
// - Opening Instagram → Browser sends a request to the server.
// - Logging into Instagram → Browser sends login information to the server.
// - Searching for a product → Browser sends search information to the server.

// Two commonly used HTTP methods are:
// - GET: Used to retrieve data from the server.
// - POST: Used to send data to the server.

// GET Request	POST Request
// Retrieves data	Sends data
// Data is generally sent in URL	Data is sent in request body
// Can be bookmarked	Cannot normally be bookmarked with submitted data
// Query parameters are visible in URL	Body data isn't displayed in URL
// Used for searching, fetching	Used for login, registration, creating data

// Example of GET Request
// Suppose we want to search for a student.

// URL:
// http://localhost:3000/search?name=Rahul&age=20

// Here:
// - search is the route.
// - name=Rahul is a query parameter.
// - age=20 is another query parameter.

const express = require('express');
const app = express();

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(`Student name: ${req.query.name}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
// Important notes:
// - app.get() handles GET requests.
// - req represents the incoming request.
// - res represents the response.
// - req.query accesses query parameters.
// - Query parameter values are generally strings.

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(`Welcome ${req.body.username}`);
});
// Here, we use req.body instead of req.query.
// Why?
// Because POST data is generally sent through the request body.
