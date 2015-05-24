angular.module('jarvis').directive('suggestions', function(apiService) {
  return {
    restrict: 'E',
    templateUrl: 'suggestions.html',
    scope: {},
    link: function(scope, element, attrs) {
      apiService.getSuggestions().then(function(suggestions) {
        scope.suggestions = suggestions;
      });
    }
  };
});
