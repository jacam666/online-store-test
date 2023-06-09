const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/LoginPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/SignupPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
