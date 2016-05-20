'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:OptionsCtrl
 * @description
 * # OptionsCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('OptionsCtrl', ['$scope','$location', function ($scope, $location) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.showOption = function(option){
    	switch(option) {
		    case 'account':
		        $location.path("/account");
		        break;
		    case 'event':
		        $location.path("/event");
		        break;
	        case 'manage':
		        $location.path("/manage");
		        break;
		    default:
		        $location.path("/account");
		}
    };
  }]);
