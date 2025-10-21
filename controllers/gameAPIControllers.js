// Core modules
const { readFile } = require('fs/promises');
const path = require('path');
// Local modules
const rootDir = require('../helpers/rootDir');

async function getGameArray() {
  const response = await readFile(path.join(rootDir, 'data', 'games.json'), { encoding: 'utf-8' });
  return JSON.parse(response);
}

// get all games
async function getAllGames(req, res, next) {
  const games = await getGameArray();
  const categories = [...new Set(games.map((g) => g.category))];
  res.json({ apiName: 'games', total: games.length, categories, data: games });
}

// filter by query
async function queryGames(req, res, next) {
  const { category, title, limit } = req.query;
  let games = await getGameArray();

  const categories = [...new Set(games.map((g) => g.category))];

  if (category || title || limit) {
    if (category) {
      games = games.filter((eachGame) => eachGame.category.toLowerCase() === category.toLowerCase());
    }

    if (title) {
      games = games.filter((eachGame) => eachGame.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (limit && !isNaN(limit)) {
      const fixedLimit = Math.floor(Number(limit));
      if (fixedLimit < 0) {
        games = games.slice(fixedLimit);
      } else {
        games = games.slice(0, fixedLimit);
      }
    }
    res.json({ apiName: 'games', total: games.length, categories, data: games });
  } else {
    next();
  }
}

// get game by id
async function getGamesById(req, res, next) {
  const { id } = req.params;
  const games = await getGameArray();
  const foundGame = games.find((eachGame) => eachGame.id == id);
  if (foundGame) {
    res.json({ apiName: 'games', data: foundGame });
  } else {
    res.json({ apiName: 'games', data: null });
  }
}

module.exports = { getAllGames, queryGames, getGamesById };
