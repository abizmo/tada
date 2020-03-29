require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { notFound, errorHandler } = require('./middlewares');
const routes = require('./routes');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(morgan('dev'));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);
app.use(bodyParser.json());
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: "It's alive" });
});

app.use('/api', routes);

// not found route and error handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
