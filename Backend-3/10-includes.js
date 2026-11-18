// In Node.js with Express, include() is commonly used in EJS (Embedded JavaScript Templates) to reuse HTML code from one file inside another file.
// It helps us avoid writing the same HTML repeatedly.
// For example, imagine you have 5 webpages. Every webpage has the same:
// - Navbar
// - Footer
// - Header
// Instead of writing the navbar and footer in all 5 files, we can create separate EJS files and include them wherever needed.

// include() is an EJS function used to insert the content of another EJS file into the current EJS file.
// <%- include("filename") %>

// include() – includes another EJS file.
// <%- %> – renders the included HTML without escaping it.
// "filename" – path of the EJS file to include.
// escaping means -> string output