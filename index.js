const express = require('express');
const { readFile } = require('fs');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (request, response) => {
    readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading home.html:', err);
            response.status(500).send('Sorry, something went wrong!');
            return;
        }
        response.send(html);
    });
});

// Route for the surprise page
app.get('/surprise', (request, response) => {
    readFile(path.join(__dirname, 'surprise.html'), 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading surprise.html:', err);
            response.status(500).send('Sorry, something went wrong!');
            return;
        }
        response.send(html);
    });
});

app.get('/noSurprise', (request, response) => {
    readFile(path.join(__dirname, 'noSurprise.html'), 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading noSurprise.html:', err);
            response.status(500).send('Sorry, something went wrong!');
            return;
        }
        response.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App available on http://localhost:3000');
});
