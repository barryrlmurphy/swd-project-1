'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('AccountCtrl', ['$scope','localStorageService', function ($scope,localStorageService) {

    console.log('project1App!');
  	console.log($scope);
  	var thisClass = this;

	$scope.submitForm = function(isValid) {
		console.log('form submit: ' + isValid);
		if (isValid) {
			console.log('our form is valid :)');
			thisClass.saveAccount();
		}else{
			console.log('form is not valid');
		}

	};

	$scope.comparePasswords = function(){
		if($scope.newAccountForm.password.$viewValue !== $scope.newAccountForm.repeatPassword.$viewValue){
			$scope.newAccountForm.repeatPassword.$invalid = true;	
		}else{
			$scope.newAccountForm.repeatPassword.$invalid = false;
		}
	};

	this.saveAccount = function(){
		var accountDetails = {
			'name' : $scope.newAccountForm.name.$viewValue,
			'email' : $scope.newAccountForm.email.$viewValue,
			'password' : $scope.newAccountForm.password.$viewValue 
		};
		localStorageService.set('accountDetails', accountDetails);

		var retreivedAccount = localStorageService.get('accountDetails');
		console.log('saved account: ');
		console.log(retreivedAccount);
	};

  }]);
