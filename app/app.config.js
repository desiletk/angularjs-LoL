'use strict';

angular.
	module('myApp').
	config(['$routeProvider',
		function config($routeProvider) {
			$routeProvider.
				when('/champions', {
					template: '<champion-list></champion-list>'
				}).
				when('/champions/:championId', {
					template: '<champion-detail></champion-detail>'
				}).
				otherwise('/champions');
		}
	]);