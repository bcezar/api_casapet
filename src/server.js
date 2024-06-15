const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
    res.send('API is working');
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
