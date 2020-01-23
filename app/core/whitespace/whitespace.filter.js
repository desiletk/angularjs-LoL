'use strict';

angular.
  module('core').
  filter('removeSpaces', function() {
    return function(input) {
      if (!angular.isString(input)) {
      	return input;
      }
      return input.replace(/[\s]/g, '');
    };
  });