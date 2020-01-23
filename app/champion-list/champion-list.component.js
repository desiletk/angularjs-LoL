'use strict';

// Register `championList` component, along with its associated controller and template
angular.
  module('championList').
  component('championList', {
    templateUrl: 'champion-list/champion-list.template.html',
    controller: ['Champion',
      function ChampionListController(Champion) {
        this.champions = Champion.query();
        this.orderProp = 'name';
      }
    ]
  });