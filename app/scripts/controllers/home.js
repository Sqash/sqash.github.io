'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.content = [
      'In Computer Science',
      'Creativity',
      'Passion',
      'A text editor',
      'a lot of coffee',
      'and just one good idea',
      'are all you need to change the world.'
    ];
  });
