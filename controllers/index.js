var express = require('express');
var router = express.Router();

router.use('/api/beers', require('./beers'));


module.exports = router;