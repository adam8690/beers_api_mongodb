var express = require('express');
var app = express();
var beerRouter = express.Router();
var BeerQuery = require('../db/beerQuery');

var beerQuery = new BeerQuery();

beerRouter.get('/', function(req, res){
  console.log('get / works for beers');
  beerQuery.all(function(docs){
    res.json(docs);
  });
})
// this will contain the routes to get the beer data from the mongo db

module.exports = beerRouter;