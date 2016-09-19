'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:OptionsService
 * @description
 * # OptionsService
 * Service of the project1App
 */
angular.module('project1App')
  .service('OptionsService', ['localStorageService', function (localStorageService) {

  	var thisClass = this;
  	this.initialOptions = { 'account' : 'current',
  							'event' : 'to-do',
							'manage' : 'to-do' };

  	this.getStoredOptions = function(){
  		var retreivedStoredOptions = localStorageService.get('storedOptions');
		console.log('retreivedStoredOptions: ');
		console.log(retreivedStoredOptions);
		if(!retreivedStoredOptions){
			thisClass.setStoredOptions(thisClass.initialOptions);
			return thisClass.initialOptions;
		}else{
			return retreivedStoredOptions;
		}
  	};	

  	this.setStoredOptions = function(options){
  		localStorageService.set('storedOptions', options);
  	};

  	this.updateStoredOptions = function(account,event,manage){
  		var retreivedStoredOptions = localStorageService.get('storedOptions');
  		retreivedStoredOptions.account = account;
  		retreivedStoredOptions.event = event;
  		retreivedStoredOptions.manage = manage;
  		thisClass.setStoredOptions(retreivedStoredOptions);
  	};

  }]);
