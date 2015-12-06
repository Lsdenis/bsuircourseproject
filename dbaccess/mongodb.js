var mongoClient = require('mongoskin');
var underscore = require('underscore');
var url = "mongodb://localhost:27017/films";

exports.find = function find(collectionName, predicate, next) {
	if (!collectionName){
		next(null, { result: false });
		return false;
	}	
	
	var db = mongoClient.db(url, {native_parser:true});
			
	db.collection(collectionName).find(predicate).toArray(function(err, docs){		
		next(err, { docs: docs, result: true });
		db.close();
	}); 
	
	return true;
};

exports.add = function add(collectionName, object, next){
	if (!collectionName){
		next(null, { result: false });
		return false;
	}
	
	var db = mongoClient.db(url, {native_parser:true});
	
	db.collection(collectionName).insert(object);
	next(null, { result: true, objectId: object._id });
	return true;
};

exports.update = function update(collectionName, predicate, object, next){	
	if (!collectionName){
		next(null, { result: false });
		return false;
	}
	
	var db = mongoClient.db(url, { native_parser:true });
	
	db.collection(collectionName).update(predicate, { $set: object });
	next(null, { result: true });
	return true;
};

exports.remove = function remove(collectionName, predicate, next){
	if (!collectionName){
		next(null, { result: false });
		return false;
	}
	
	var db = mongoClient.db(url, {native_parser:true});
	
	db.collection(collectionName).remove(predicate);
	next(null, { result: true });
	return true;
};