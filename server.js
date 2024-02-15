const fs = require("fs");
const marked = require("marked");
const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
let ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("static"));
const notFoundPage = path.join(__dirname, "views", "notFound.ejs");

const allLinks = [
    {
        paramId: "notesKilian",
        link: "static/notesKilian.md"
    }, 
    {
        paramId: "notesFenna",
        link: "static/notesFenna.md"
    }, 
    {
        paramId: "processWAFS",
        link: "https://jopmolenaar.github.io/web-app-from-scratch-2324/process.md"
    }
]

// Define a route with a dynamic :id parameter
app.get("/:id", async function (req, res) {
    try {
        const id = req.params.id;
        let html;

        for (const item of allLinks) {
            if (id === item.paramId && !item.link.startsWith("http")) {
                html = await parseToHTML(item.link);
            } else if (id === item.paramId) {
                html = await parseHTTPmdToHTML(item.link);
            }
        }

        if (!html) {
            console.log("notFound");
            res.status(404).render(notFoundPage);
            return;
        } 

        // Render the EJS template with the HTML content
        res.render("index", { html: html });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error reading file");
    }
});

// Parse local Markdown file to HTML
const parseToHTML = (markdownFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(markdownFile, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                reject(err);
            } else {
                const html = marked(data);
                resolve(html);
            }
        });
    });
};

// Parse remote Markdown file to HTML
const parseHTTPmdToHTML = async (url) => {
    try {
        const response = await axios.get(url);
        const html = marked(response.data);
        return html;
    } catch (error) {
        console.error("Error fetching file:", error);
        throw error;
    }
};

app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});