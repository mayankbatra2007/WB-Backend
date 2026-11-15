// Query Strings

// Query strings are used to pass additional information through a URL.

// They appear after the ? symbol.

// Example:
// /products?category=mobile&price=20000
// category=mobile
// price=20000
// & separates multiple parameters

const express = require('express');
const app = express();

app.get("/products", (req, res) => {
    // access query params

    const category = req.query.category;
    const price = req.query.price;

    res.json({
        category: category,
        price: price
    });
});

app.listen(3000);
