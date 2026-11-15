// Sending Response

// After receiving a request, the server sends a response to the client.

// Express provides different response methods.

const express = require('express');
const app = express();

// 1. send text
app.get("/text", (req, res) => {
    res.send("Hello backend");
});

// 2. Send JSON
app.get("/json", (req, res) => {
    res.json({
        name: "Mayank",
        course: "CSE",
        sem: 3
    });
});

// 3. send status code
app.get("/status", (req, res) => {
    res.status(200).send("Sucess");
});

// 4. send error status
app.get("/error", (req, res) => {
    res.status(404).send("Page not Found");
});

app.listen(3000);

//<----Notes---->
// Method	Meaning
// res.send()	Sends text, HTML or other data
// res.json()	Sends JSON response
// res.status()	Sets HTTP status code
// res.sendStatus()	Sends status code with default message
// res.redirect()	Redirects to another URL
