// External modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Local modules
const gameAPIRouter = require('./routers/gameAPIRouter');

// Initialize app
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// api routes
app.use('/games', gameAPIRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '404 - Not Found'
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('API is live');
});
