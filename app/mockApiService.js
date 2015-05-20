angular.module('jarvis').requires.push('ngMockE2E');

angular.module('jarvis').run(function($httpBackend) {
  console.log('mocks!');
});
