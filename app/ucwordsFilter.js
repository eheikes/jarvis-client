angular.module('jarvis').filter('ucwords', function() {
  return function(str) {
    return str.replace(/(^|\s)([a-z])/g, function(entireMatch) {
      return entireMatch.toUpperCase();
    });
  }
});
