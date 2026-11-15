// Path Parameters

// Path parameters are dynamic values passed directly inside a URL.

// For example:
// /users/101
// /users/102
// /users/103

// Instead of creating separate routes for every user, we use :id.

const express = require('express');
const app = express();

// :id is a dynamic path paramter
app.get("/users/:id", (req, res) => {
    // access path parameter
    const userId = req.params.id;

    res.send(`user ID is ${userId}`);
});

app.get("/products/:category/:id", (req, res) => {
    const category = req.params.category;
    const productId = req.params.id;

    res.json({
        category: category,
        id: productId
    });
});

app.listen(3000);

// req.params stores path parameters, and their values are strings by default.

