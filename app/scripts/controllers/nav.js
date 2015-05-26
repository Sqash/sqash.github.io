'use strict';

angular.module('samWhiteleyApp')
  .controller('NavCtrl', function($scope, $location) {
    $scope.menu = [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Projects',
        link: '/projects'
      },
      {
        title: 'Resume',
        link: '/resume'
      },
      {
        title: 'Contact',
        link: '/contact'
      }
    ];

    $scope.collapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
