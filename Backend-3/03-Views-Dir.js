// What is the views directory?
// By default, Express searches for EJS templates inside a folder named views.

// Custom views directory
// Suppose you want to store templates inside a folder called templates instead.

const path = require("path");
// configure custom templates folder
app.set("views", path.join(__dirname, "templates"));

// Why use path.join(__dirname, ...)?
// - __dirname gives the directory containing the current JavaScript file in CommonJS.
// - path.join() constructs a filesystem path.
// - This avoids depending on the directory from which you started Node.js.