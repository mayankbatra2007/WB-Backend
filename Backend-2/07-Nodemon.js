// Installing Nodemon

// whenever we mmake changes in our server code,
// we need to stop and restart the server manually

// Nodemon auto restarts the Node.js application
// whenver it detects file changes.

// install
// npm install -g nodemon

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Nodemon is working!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// You can also configure scripts in package.json:
// "scripts": {
//     "start": "node 06-nodemon.js",
//     "dev": "nodemon 06-nodemon.js"
// }

// run
// npm run dev

// Remember
//  Nodemon is a development tool, not something normally required to run your production server

