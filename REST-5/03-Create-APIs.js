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
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(methodOverride("_method"));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: 'I love coding'
    },
    {
        id: uuidv4(),
        username: "mayankbatra",
        content: "win the hackathon"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id, username, content});
    // res.send('Post Request working');
    res.redirect("/posts"); // GET /posts
});

// Redirect: Redirect = Send the client to another URL
// A redirect tells the browser or client that it should navigate to a different location
// Imagine a user creates a new post successfully.
// The user submits the post, and the backend creates it.
// Instead of showing the same form again, the server might redirect the user to the newly created post.
// Redirect in a REST API context
// A REST API doesn't always perform a browser-style redirect. It may simply return a response containing the created resource and its location.

// For example, a successful creation can return:
// - 201 Created
// - A Location header identifying the newly created resource.
// Redirects such as 302 and 303 are more common in traditional web workflows. API clients often handle successful responses directly.


// GET /posts/:id
// Show Route : to go to one specific post(using id)
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs", { post });
});

// Creating IDs (UUID)
// UUID = Universally Unique Identifier
// Every post needs an identifier so that we can find, update or delete it individually.
// Why use UUIDs?
// - Unique identification.
// - IDs aren't necessarily sequential.
// - Convenient for distributed systems.
// - Can be generated without relying on a central counter.
// npm i uuid
// const { v4: uuidv4 } = require('uuid');
// id: uuidv4(),



// PATCH /posts/:id
// Update Route: to Update specific post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id == p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// Update Route or Edit Route
// Serve the edit form GET /posts/:id/edit
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// Delete Route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("delete success");
    res.redirect("/posts");
});