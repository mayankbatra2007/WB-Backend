const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/03-index.html");
});

app.post("/register", (req, res) => {
    let { username, email } = req.body;
    console.log(username);
    console.log(email);

    res.send(`
        <h1>Registration Successful!</h1>
        <h2>Welcome ${username}</h2>
        <p>Email: ${email}</p>
    `);
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});

// What is express.urlencoded()?
// app.use(express.urlencoded({ extended: true }));

// This is middleware used to parse data submitted through HTML forms using URL-encoded form encoding.
// Without this middleware, req.body may be undefined for these requests.

// Important: For JSON requests, use:
// app.use(express.json());

// For HTML forms using URL-encoded data, use:
// app.use(express.urlencoded({ extended: true }));