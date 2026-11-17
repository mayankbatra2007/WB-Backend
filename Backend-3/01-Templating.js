// What is Templating?

// Templating means creating HTML dynamically using data from the backend.

//  Why do we need templating?
// Suppose you want to display 100 students.
// Without templating, you might have to write HTML for every student.
// With templating, you write one HTML template and pass student data from Express

// How Templating Works ?

// Browser sends request
// GET /profile
// ->
// Express.js server
// Fetches or prepares user data
// ->
// EJS template engine
// Combines HTML + JavaScript data
// ->
// Browser displays generated HTML