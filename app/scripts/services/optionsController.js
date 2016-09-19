'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:OptionsCtrl
 * @description
 * # OptionsCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('OptionsCtrl', ['$scope','$location', 'OptionsService', 'AccountsService', 
  						function ($scope, $location, OptionsService, AccountsService) {

  	$scope.storedOptions = null;
  	$scope.accountOptionText = 'Create Your Account';

  	this.init = function(){
  		$scope.storedOptions = OptionsService.getStoredOptions();
  		$scope.checkAccount();	
  	};

    $scope.showOption = function(option){
    	if($scope.storedOptions[option] === 'current'){
	    	switch(option) {
			    case 'account':
			        $location.path('/account');
			        break;
			    case 'event':
			        $location.path('/event');
			        break;
		        case 'manage':
			        $location.path('/manage');
			        break;
			    default:
			        $location.path('/account');
			}	
    	}
    };

    $scope.checkAccount = function(){
    	var account = AccountsService.getStoredAccount();
    	if(account){
          $scope.accountOptionText = 'Hi, ' + account.name + '!';	
    	}
    };

    this.init();

  }]);
