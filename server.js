const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const { handleError } = require('./middlewares/errors/error');

const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
});

// BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/weather', require('./routes/api/weather'));

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Weather Forecast server started on port ${port}`);
});
