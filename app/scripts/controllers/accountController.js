'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('AccountCtrl', ['$scope', function ($scope) {

    console.log('project1App!');
  	console.log($scope);

	$scope.submitForm = function(isValid) {
		console.log('form submit: ' + isValid);
		if (isValid) {
			console.log('our form is amazing');
		}

	};

  }]);
