const express = require('express');
const logger = require('./utils/logger');
const httpLogger = require('./middlewares/httpLogger');
const { handleError } = require('./middlewares/errors/error');

const app = express();

// BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP Logger Middleware
app.use(httpLogger);

// Routes Middleware
app.use('/weather', require('./routes/api/weather'));

// Error handling Middleware
app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  logger.info(`Weather Forecast server started on port ${port}`);
});
