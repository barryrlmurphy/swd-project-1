'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('ManageCtrl', ['$scope','$location','EventsService','OptionsService','AccountsService', 
  						function ($scope,$location,EventsService,OptionsService,AccountsService) {

  	// var thisClass = this;
  	$scope.events = null;

  	this.init = function(){
  		$scope.events = EventsService.getEvents();
  		console.log($scope.events);
  		if(!AccountsService.getStoredAccount() || !$scope.events){
  			$location.path('/');
  		}
  	};

  	$scope.deleteEvent = function(index){
  		console.log('deleteEvent: ' + index);
  		EventsService.deleteEvent(index);
  		$scope.events = EventsService.getEvents();
  	};

	this.init();

  }]);
