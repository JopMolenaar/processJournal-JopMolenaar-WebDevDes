const fs = require("fs");
const marked = require("marked");
const express = require("express");
const app = express();
const path = require("path");
let ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("static"));
// Read the Markdown file

app.get("/home", function (req, res) {
    fs.readFile("process.md", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        // Parse Markdown to HTML
        const html = marked(data);

        // Do something with the HTML content
        console.log(html);
    });
    res.render("index");
    // use res.render to load up an ejs view file
});

app.listen(3030);
console.log("Server is listening on port 3030");
