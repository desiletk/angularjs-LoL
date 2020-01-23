angular.
	module('championDetail').
	component('championDetail', {
		templateUrl: 'champion-detail/champion-detail.template.html',
		controller: ['$routeParams', 'Champion',
			function championDetailController($routeParams, Champion) {
				var self = this;
				self.champion = Champion.get({championId: $routeParams.championId}, function(champion) {
					self.setImage("http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/{{champion.name | removeSpaces}}.png");
				});
				self.setImage = function setImage(imageUrl) {
					self.mainImageUrl = imageUrl
				}
			}
		]
	});