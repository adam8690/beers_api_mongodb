var express = require('express');
var app = express();
var beerRouter = express.Router();
var BeerQuery = require('../db/beerQuery');

var beerQuery = new BeerQuery();

// this will contain the routes to get the beer data from the mongo db

module.exports = beerQuery;