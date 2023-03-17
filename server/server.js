const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
    res.json({
        "users": ['userOne', 'userTwo', 'userThree']
    });
});

// Response: List of items
app.get("/api/items", (req, res) => {
    const data = fs.readFileSync('file.json', 'utf-8');
    const items = JSON.parse(data)['items'];
    res.json(items);
});

// Response: Single item by Id
app.get("/api/items/:id", (req, res) => {
    const { id } = req.params;
    const data = fs.readFileSync('file.json', 'utf-8');
    const item = JSON.parse(data)['items'][id-1];
    res.json(item);
});

app.listen(port, () => {
    console.log("Server started on port 5000.");
});