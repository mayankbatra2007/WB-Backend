// Interpolation Syntax
// Interpolation means inserting JavaScript values or expressions inside HTML

// EJS syntax cheat sheet
// Syntax	Meaning
// <%= value %>	Output escaped value
// <%- value %>	Output unescaped content
// <% code %>	Execute JavaScript without output
// <%# comment %>	EJS comment
// <%%	Output a literal <%
// <% -%>	Remove the following newline
// <%_ / _%>	Trim surrounding whitespace

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
    res.render('about.ejs');
});
// refer to about.ejs for this topic
app.listen(3000, () => {
    console.log("Listening Request");
});
