const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a Aws project to create a CI/CD pipeline,Another commit to see continous change delivery'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
