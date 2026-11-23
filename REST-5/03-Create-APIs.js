// An API endpoint is a way for a client to interact with a particular resource on the server
// Eg: Quora
// Endpoint	Purpose
// /posts	All posts
// /posts/101	A particular post
// /posts/101/comments	Comments on post 101

// A resource is an entity or data object that the API manages.
// primary resource: posts

const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended : true }));
app.set(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

let posts = [
    {
        username: "apnacollege",
        content: 'I love coding'
    },
    {
        username: "mayankbatra",
        content: "win the hackathon"
    },
    {
        username: "rahul",
        content: "learning java"
    }
];

app.listen(3000, () => {
    console.log("Server started");
});

app.get("/", (req, res) => {
    res.send("Server working");
});

// GET /posts : to get data for all posts
// -> Index Route
// Index = Show all resources
// An index route retrieves the entire collection of a resource, or a collection based on filters.
// A user opens the Quora homepage and wants to see all questions.
// The frontend requests:
// GET /posts
// Retrieve all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


// POST /posts : to add new post
// Create Route
// Two Routes:
// Serve the form GET /posts/new
// Add the new Post POST /posts
// A new or form route is typically used in traditional server-rendered applications to display a form for creating a new resource.
// The create route actually processes the submitted data and creates a new post.

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.send('Post Request working');
});