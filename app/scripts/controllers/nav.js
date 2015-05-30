'use strict';

angular.module('samWhiteleyApp')
  .controller('NavCtrl', function($scope, $location, $rootScope) {

    $rootScope.$on('$locationChangeSuccess', function() {
      $scope.currPage = $scope.getCurrPage();
      $scope.collapsed = false;
    });

    $scope.getCurrPage = function() {
      for(var i=0, l=$scope.menu.length; i<l; i++){
        if($scope.menu[i].link === $location.path()) {
          return $scope.menu[i].title;
        }
      }
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

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

    $scope.collapsed = false;
    $scope.currPage = $scope.getCurrPage();

  });
