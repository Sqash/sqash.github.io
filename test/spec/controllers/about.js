'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('samWhiteleyApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should have sections', function () {
    expect(scope.sections.length).toBeGreaterThan(0);
  });
});
