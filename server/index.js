
const express = require('express');

const defaultRouter = require('./routers/default.js');

const app = express();
const port = 8080;

const path = require('path');

app.use(express.json());
app.use(express.static(path.resolve('client', 'dist')));

app.use(defaultRouter);

app.listen(port, () => {
  console.info(`App available on http://localhost:${port} or http://127.0.0.1:${port}`);
});
