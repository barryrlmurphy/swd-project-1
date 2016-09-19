'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('EventsCtrl', ['$scope','$location','EventsService','OptionsService','AccountsService', 
  						function ($scope,$location,EventsService,OptionsService,AccountsService) {

  	var thisClass = this;
  	this.generalError = false;

  	this.init = function(){
  		if(!AccountsService.getStoredAccount()){
  			$location.path('/');
  		}
  	};

	$scope.submitForm = function(isValid) {
		console.log('form submit: ' + isValid);
		if (isValid) {
			console.log('our form is valid :)');
			thisClass.generalError = false;
			thisClass.saveEvent();
			OptionsService.updateStoredOptions('complete','current','current');
			$location.path('/');
		}else{
			console.log('form is not valid');
			thisClass.generalError = true;
		}

	};

	this.saveEvent = function() {
		console.log('saveEvent');
		console.log($scope.newEventForm);
		// var timestamp = new Date().valueOf();
		var timestamp = new Date().getTime();
		var event = {
			'id' : timestamp,
			'type' : $scope.newEventForm.type.$viewValue,
			'host' : $scope.newEventForm.host.$viewValue,
			'date' : $scope.newEventForm.date.$viewValue,
			'time' : $scope.newEventForm.time.$viewValue,
			'guests' : $scope.newEventForm.guests.$viewValue,
			'location' : $scope.newEventForm.location.$viewValue,
			'moreInfo' : $scope.newEventForm.moreInfo.$viewValue 
		};
		console.log(event);
		EventsService.saveEvent(event);		

	};

	this.init();

  }]);
