'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('AccountCtrl', ['$scope','$location','localStorageService','AccountsService','OptionsService', 
  						function ($scope,$location,localStorageService,AccountsService,OptionsService) {

  	var thisClass = this;
  	this.generalError = false;

  	this.init = function(){
  		if(AccountsService.getStoredAccount()){
  			$location.path('/');
  		}
  	};

	$scope.submitForm = function(isValid) {
		console.log('form submit: ' + isValid);
		if (isValid) {
			console.log('our form is valid :)');
			thisClass.generalError = false;
			thisClass.saveAccount();
			OptionsService.updateStoredOptions('complete','current','to-do');
			$location.path('/event');
		}else{
			console.log('form is not valid');
			thisClass.generalError = true;
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
		AccountsService.saveAccount(accountDetails);
	};

	this.init();

  }]);
