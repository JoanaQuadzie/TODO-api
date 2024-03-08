const express = require('express');

// Create express app
const app = express();

// Define routes
app.get('/', (req, res) => {
    // console.log(req.headers, req.query);
    res.send("Hold on!");
});

app.get('/Ping', (req, res) => {
    res.send("Ping Pong");
});

app.get('/File', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html");
});






//Listen for incoming requests
app.listen(4000, () => {
    console.log("Express app is running!")
});















// the listen part must always be the last code