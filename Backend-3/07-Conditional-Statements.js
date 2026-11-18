// If-else

const express = require('express');
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Server running");
});

app.get("/rolldice", (req, res) => {
    const diceval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceval });
});
