var mongoSkin = require('../dbaccess/mongodb');
var collections = require('../dbaccess/collections');
var skinHelper = require('mongoskin').helper;


exports.getAll = function(err, collectionName, next){
	mongoSkin.find(collectionName, null, next);
	return true;
}

exports.getById = function(err, collectionName, id, next){
	mongoSkin.find(collectionName, { _id: skinHelper.toObjectID(id) }, next);
	return true;
};

exports.addNew = function(err, collectionName, object, next){
	mongoSkin.add(collectionName, object, next);
	return true;	
};

exports.remove = function(err, collectionName, id, next){
	mongoSkin.remove(collectionName, { _id: skinHelper.toObjectID(id) }, next);
	return true;
};

exports.update = function(err, collectionName, id, object, next){
	mongoSkin.update(collectionName, { _id: skinHelper.toObjectID(id) }, object, next);
};