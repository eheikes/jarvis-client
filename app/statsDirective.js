angular.module('jarvis').directive('stats', function(apiService) {
  return {
    restrict: 'E',
    templateUrl: 'stats.html',
    scope: {},
    link: function(scope, element, attrs) {
      apiService.getStats().then(function(stats) {
        scope.stats      = stats;
        scope.today      = scope.stats.today;
        scope.today.diff = scope.today.added - scope.today.deleted;
        scope.week       = scope.stats.week;
        scope.breakdown  = scope.stats.breakdown.map(function(item) {
          var thisDiff, todayDiff;
          item.today.diff = item.today.added - item.today.deleted;
          thisDiff  = Math.max(0, item.today.diff);
          todayDiff = Math.max(0, scope.today.diff);
          item.today.width = (todayDiff === 0) ?
            0 :
            thisDiff / todayDiff * 100;
          return item;
        })
      });
    }
  };
});
