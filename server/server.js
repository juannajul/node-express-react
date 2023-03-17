const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

// Response: List of items
app.get("/api/posts", (req, res) => {
    // Read the JSON file with the data.
    const data = fs.readFileSync('file.json', 'utf-8');
    const items = JSON.parse(data);
    res.json(items);
});

// Response: Single item by Id
app.get("/api/posts/:id", (req, res) => {
    const { id } = req.params;
    // Read the JSON file with the data.
    const data = fs.readFileSync('file.json', 'utf-8');
    const item = JSON.parse(data)['items'][id-1];
    res.json(item);
});

app.listen(port, () => {
    console.log("Server started on port 5000.");
});