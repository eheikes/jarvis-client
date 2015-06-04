angular.module('jarvis')
.factory('statsApi', function statsApi($resource, config) {
  return $resource(config.apiUrl + '/stats');
})
.factory('serviceApi', function serviceApi($resource, config) {
  return $resource(config.apiUrl + '/:serviceName',
    {
      serviceName: '@serviceName'
    }
  );
})
.factory('serviceDetailApi', function serviceDetailApi($resource, config) {
  return $resource(config.apiUrl + '/:serviceName/:id',
    {
      serviceName: '@serviceName',
      id: '@id'
    }
  );
})
.factory('suggestionApi', function suggestionApi($resource, config) {
  return $resource(config.apiUrl + '/suggest');
})
.factory('apiService', function apiService(statsApi, serviceApi, serviceDetailApi, suggestionApi) {
  // Returns stats for the last 7 days,
  function getStats() {
    return statsApi.get().$promise;
  }

  // Returns suggested items for deletion.
  function getSuggestions() {
    return suggestionApi.query().$promise;
  }

  // Adds an item to the given service.
  function add(serviceName, data) {
    return serviceApi.post({ serviceName: serviceName }, data).$promise;
  }

  // Removes the specified item.
  function remove(serviceName, action, id) {
    return serviceDetailApi.delete({
      serviceName: serviceName,
      action: action,
      id: id
    }).$promise;
  }

  return {
    add: add,
    getStats: getStats,
    getSuggestions: getSuggestions,
    remove: remove
  }
});
