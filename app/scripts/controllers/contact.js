'use strict';

/**
 * @ngdoc function
 * @name samWhiteleyApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the samWhiteleyApp
 */
angular.module('samWhiteleyApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.title = 'Get In Touch';
    $scope.content = 'Holding paragraph';
  });
