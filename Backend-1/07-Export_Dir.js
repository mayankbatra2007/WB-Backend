// 07 - EXPORT IN DIRECTORIES

// Node.js allows us to organize multiple modules
// inside directories.

// An index.js file can act as the main entry point
// of a directory.

// math/
//    index.js
//    add.js
//    subtract.js

// We can import the directory using:

const math = require("./math");

// Node.js automatically looks for index.js
// when resolving a directory with CommonJS.