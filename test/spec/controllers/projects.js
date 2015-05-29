'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('samWhiteleyApp'));

  var ProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope
    });
  }));

  it('should have 3 projects', function () {
    expect(scope.projects.length).toBe(3);
  });

});
