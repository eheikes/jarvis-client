angular.module('jarvis').directive('stats', function(apiService) {
  return {
    restrict: 'E',
    templateUrl: 'stats.html',
    scope: {},
    link: function(scope, element, attrs) {
      apiService.getStats().then(function(stats) {
        scope.stats     = stats;
        scope.today     = scope.stats.today;
        scope.week      = scope.stats.week;
        scope.breakdown = scope.stats.breakdown.map(function(item) {
          item.today.width = item.today.added / scope.today.added * 100;
          return item;
        })
      });
    }
  };
});
