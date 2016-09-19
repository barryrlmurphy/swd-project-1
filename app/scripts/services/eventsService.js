'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:EventsService
 * @description
 * # EventsService
 * Service of the project1App
 */
angular.module('project1App')
  .service('EventsService', ['localStorageService', function (localStorageService) {

  	var thisClass = this;

  	this.getEvents = function(){
		return JSON.parse(localStorageService.get('events')) || false;
  	};	

  	this.saveEvent = function(newEvent){
  		var events = thisClass.getEvents();

  		if(events){
	  		events.push(newEvent);
  		}else{
  			events = [newEvent];
  		}

      	localStorageService.set('events', JSON.stringify(events));
  	};

  	this.deleteEvent = function(index){
  		var events = thisClass.getEvents();
  		console.log(events);
  		events.pop(index);
  		console.log(events);

      	localStorageService.set('events', JSON.stringify(events));
  	};

  }]);
