'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.title = 'My Projects';
    $scope.content = 'Holding paragraph';
  });
