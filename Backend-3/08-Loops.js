// Loops

const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "viwes"));
app.listen(3000, () => {
    console.log("Server runing");
});

app.get("/ig/:username", (req, res) => {
    const followers = ["adam", "bob", "seya"];
    let { username } = req.params;
    res.render("instagramtwo.ejs", { username, followers });
});
