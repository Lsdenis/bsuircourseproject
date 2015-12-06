var express = require('express');
var router = express.Router();
var dbService = require('../services/dbService');
var collections = require('../dbaccess/collections');

router.param('filmid', function(req, res, next, filmid) {
  req.film = {
    id: filmid
  };
  next();
});

router.get('/', function(req, res, next) {
    dbService.getAll(null, collections.reviews, function(err, result){
        res.json(result.docs);
    });
    
    return true;
});

router.get('/:filmid', function(req, res, next) {
    dbService.getById(null, collections.reviews, req.film.id, function(err, result){
        res.json(result.docs);
    });
    
    return true;
});

router.put('/:filmid', function(req, res, next) {
     dbService.update(null, collections.reviews, req.film.id, req.body, function(err, result){
         if (result.result){
             res.sendStatus(200);
         }
         else {
             res.sendStatus(500);
         }
     });
    
    return true;
});

router.post('/add', function(req, res, next) {
     dbService.addNew(null, collections.reviews, req.body, function(err, result){
         if (result.result){
             res.status(200).send({ id: result.objectId });
         }
         else {
             res.sendStatus(500);
         }
     });
    
    return true;
});

router.delete('/:filmid', function(req, res, next) {
    dbService.remove(null, collections.reviews, req.film.id, function(err, result){
         if (result.result){
             res.sendStatus(200);
         }
         else {
             res.sendStatus(500);
         }
    });
    
    return true;
});

module.exports = router;