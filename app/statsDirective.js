angular.module('jarvis').directive('stats', function(apiService) {
  return {
    restrict: 'E',
    templateUrl: 'stats.html',
    scope: {},
    link: function(scope, element, attrs) {
      apiService.getStats().then(function(stats) {
        scope.stats = stats;
        scope.today = scope.stats.today;
        scope.week  = scope.stats.week;
      });
    }
  };
});
