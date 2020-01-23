angular.
	module('core.champion').
	factory('Champion', ['$resource',
		function($resource) {
			return $resource('champions/:championId.json', {}, {
				query: {
					method: 'GET',
					params: {championId: 'champions'},
					isArray: true
				}
			});
		}
	]);	