'use strict';

/**
*  Module
*
* Description
*/
angular.module('mdp-web.service', [])

.service('Service', function($q){
	var product = firebase.database().ref('mdp/web/product');
	var popup = firebase.database().ref('mdp/web/popup');
	var tagline = firebase.database().ref('mdp/web/tagline');

	this.getProducts = function(){
		return promiseValue(product);
    }
    
	this.getPopup = function(){
		return promiseValue(popup);
    }
    
	this.getTagline = function(){
		return promiseValue(tagline);
	}

	// this.getUserDetail = function(email){
	// 	return promiseAdded(user.orderByChild('email').equalTo(email));
	// }

	// this.getPromos = function(){
	// 	return promiseValue(promo);
	// }

	// this.checkAdmin = function(email){
	// 	return promiseAdded(admin.orderByChild('email').equalTo(email));
	// }

	// this.deletePromo = function(index){
	// 	firebase.database().ref('promos/'+index).remove();
	// }

	// this.addPromo = function(dataPromo){
	// 	console.log(dataPromo);
	// 	var promise = $q.defer();

	// 	firebase.database().ref('promos/'+dataPromo.index).set({
	// 		'index': dataPromo.index,
	// 		'name': dataPromo.title,
	// 		'startDate': dataPromo.startDate.getTime()/1000,
	// 		'endDate': dataPromo.endDate.getTime()/1000,
	// 		'description': dataPromo.description,
	// 		'imgUrl': dataPromo.imgUrl,
	// 		'imageFileName': dataPromo.imageFileName,
	// 		'dateCreated': firebase.database.ServerValue.TIMESTAMP
	// 	}).then(function(){
	// 		promise.resolve(true);
	// 	});

	// 	return promise.promise;
	// }

	function promiseAdded(obj) {
		var promise = $q.defer();

		obj.on('child_added', function(data) {
			promise.resolve(data.val());
		}, function(err) {
			promise.reject(null);
			console.log("Error fetch data");
		});

		return promise.promise;
	}

	function promiseValue(obj) {
		var promise = $q.defer();

		obj.on('value', function(data) {		
			promise.resolve(data.val());
		}, function(err) {
			promise.reject(null);
			console.log("Error fetch data"+err);
		});

		return promise.promise;
	}
});