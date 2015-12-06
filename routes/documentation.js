var express = require('express');
var router = express.Router();

router.get('/films', function(req, res, next){
	res.render('films', { title: 'Films' });
});

router.get('/reviews', function(req, res, next){
	res.render('reviews', { title: 'Reviews' });
});

module.exports = router;