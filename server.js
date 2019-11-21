const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
});

// BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(morgan('combined', { stream: accessLogStream }));

const port = process.env.PORT || 5000;

app.use('/wheater', require('./routes/api/wheater'));

app.listen(port, () => {
  console.log(`Wheater Forecast server started on port ${port}`);
});
