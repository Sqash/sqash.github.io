'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.title = 'About Me';
    $scope.content = 'A holding paragraph';
  });
