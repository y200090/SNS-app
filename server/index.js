const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan('combined'));

server.listen(port, () => {
    console.log(`SNS app listening on port ${port}.`);
});
