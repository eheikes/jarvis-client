/* global angular, faker */
angular.module('jarvis').requires.push('ngMockE2E');

angular.module('jarvis').run(function($httpBackend, config, ucwordsFilter) {
  'use strict';

  var services = {
    'Email': ['delete', 'archive'],
    'Newsfeed': ['markAsRead'],
    'Twitter': ['markAsRead'],
    'Netflix': ['remove']
  };

  function getRandomKey(obj) {
    var keys = Object.keys(obj);
    var i = Math.floor(Math.random() * keys.length);
    return keys[i];
  }

  $httpBackend.whenGET(/\/suggest\b/).respond(function(method, url, data) {
    var fakeSuggestions = [];
    var service;
    for (var i = 0; i < 20; i++) {
      service = getRandomKey(services);
      fakeSuggestions.push({
        service: service,
        name: ucwordsFilter(faker.lorem.words().join(' ')),
        summary: faker.lorem.paragraph(),
        url: 'http://example.com',
        actions: services[service] });
    }
    return [200, fakeSuggestions];
  });

});
