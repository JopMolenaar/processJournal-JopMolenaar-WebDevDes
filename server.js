const fs = require("fs");
const marked = require("marked");
const express = require("express");
const app = express();
const path = require("path");
let ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get("/home", function (req, res) {
    // Read the Markdown file
    fs.readFile("static/process.md", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading file");
        }

        // Parse Markdown to HTML
        const html = marked(data);

        // Render the EJS template with the HTML content
        res.render("index", { html: html });
    });
});

app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});

// source chat gpt
// promt: I want to get the content from a markdown file and parse it in to html
