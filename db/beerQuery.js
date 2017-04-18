var MongoClient = require('mongodb').MongoClient;

var BeerQuery = function(){
  this.url = "mongodb://localhost:27017/beers_db";
}

BeerQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('beers');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        })
      }
    })
  }
}


module.exports = BeerQuery;


