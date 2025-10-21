// External modules
const express = require('express');
// Local modules
const { queryGames, getAllGames, getGamesById } = require('../controllers/gameAPIControllers');

const router = express.Router();

router.get('/', queryGames, getAllGames);
router.get('/:id', getGamesById);

module.exports = router;
