'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('samWhiteleyApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have 7 lines in content', function () {
    expect(scope.content.length).toBe(7);
  });
});
