const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const oneHour = 3600 * 1000;
app.use(express.static(path.join(__dirname, 'client'), { maxAge: oneHour }));

const router = require('./routes/routes.js');

app.use('/', router);

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'client') });
});

app.listen(PORT, () => {
  console.warn(`Server is listening on port: ${PORT}`);
});
