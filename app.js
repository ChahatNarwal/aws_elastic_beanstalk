const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a Aws project to create a CI/CD pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
