'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AccountsService
 * @description
 * # AccountsService
 * Service of the project1App
 */
angular.module('project1App')
  .service('AccountsService', ['localStorageService', function (localStorageService) {

  	this.getStoredAccount = function(){
      console.log('getStoredAccount!');
  		return localStorageService.get('accountDetails') || false;
  	};	

  	this.saveAccount = function(accountDetails){
      localStorageService.set('accountDetails', accountDetails);
  	};

  }]);
