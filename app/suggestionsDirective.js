/* global angular */
angular.module('jarvis').directive('suggestions', function(apiService) {
  'use strict';
  return {
    restrict: 'E',
    templateUrl: 'suggestions.html',
    scope: {},
    link: function(scope, element, attrs) {
      scope.suggestions = [];
      apiService.getSuggestions().then(function(suggestions) {
        scope.suggestions = suggestions;
      });

      scope.do = function(action, service, id) {
        apiService.remove(service, action, id);
      };
    }
  };
});
