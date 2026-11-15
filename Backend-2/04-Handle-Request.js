// Handling Requests

// A request is sent by the client (browser, frontend, Postman) to the server.

// Express Provide two IMP** Objects
// req -> contains info about the incoming request
// res -> used to send a response

const express = require('express');
const app = express();

// GET request
app.get("/user", (req, res) => {
    // Request info
    console.log(req.method); // GET
    console.log(req.url); // /user
    console.log(req.path); // /user

    res.send("User request received");
});

app.listen(3000, () => {
    console.log("Server running");
});
