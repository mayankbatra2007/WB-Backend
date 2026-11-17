// Passing Data to EJS

const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Server handling Requests");
});

// Eg-1 : pAssing vars
app.get("/user", (req, res) => {
    let userName = 'Mayank';
    let age = 19;

    // Pass Variables to EJS template
    res.render("user.ejs", {
        userName: userName,
        age: age
    });
});

// Eg-2 : JS Expressions
app.get("/demo", (req, res) => {
    res.render("demo", {
        message: "<strong>Hello World</strong>",
        userName: "Mayank"
    });
});

// Eg-3 Data large(some)
app.get("/student", (req, res) => {
    // student object
    const student = {
        name: "mayank",
        course: "BE CSE",
        sem: 3,
        cgpa: 9.44,
        skills: ["Java", "SQL", "JavaScript"]
    };
    // pass object to ejs
    res.render("student.ejs", { student });
});

// Interview point: res.render() takes the template name and an optional object containing the data used to render the page.
