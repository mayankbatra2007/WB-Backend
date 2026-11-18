// What are static files?
// Static files are resources that the server sends without rendering them through a template engine.

// Examples include CSS, client-side JavaScript, images, fonts, and icons.

// Express uses express.static() middleware to serve them.

const express = require("express");

const app = express();

app.set("view engine", "ejs");

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});
// public is the folder name.
// Express makes its files accessible through URLs.
// You don't write /public/style.css.
// You write /style.css.
app.listen(3000);
