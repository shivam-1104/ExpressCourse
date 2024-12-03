const express = require('express');
const path = require('path');

const app = express();

//Setup Static Folder
// app.use(express.static(path.join(__dirname, 'Public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Public', 'index.html'));
// } );

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Public', 'about.html'));
// } );

let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' },
    { id: 4, title: 'Post Four' },
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
} )

app.listen(8000, ()=> console.log(`Server is listening to port 8000`) );