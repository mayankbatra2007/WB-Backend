// Express Framework bulit on Node.js
// it helps us to create servers and APis easyily

const express = require('express');

// Create an Express Application
const app = express();

// starting the server
app.listen(3000, () => {
    console.log("Sever running on port 3000");
});

// use -> handle all type of requests
app.use((req, res) => {
    console.log("request recieved");
    res.send("this is a basic resposne");
});
// http://localhost:3000/

//<----Notes---->
// require('express') imports express
// express() creates an application
// app.listen() starts server
// app.get() Handles GET request
