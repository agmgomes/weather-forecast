const express = require('express');

const app = express();

// BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use('/wheater', require('./routes/api/wheater'));

app.listen(port, () => {
  console.log(`Wheater Forecast server started on port ${port}`);
});
