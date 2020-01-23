'use strict';

angular.
  module('core').
  filter('square', function() {
    return function(input) {
      return '\u25a0'
    };
  });
