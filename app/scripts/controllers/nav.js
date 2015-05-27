'use strict';

angular.module('samWhiteleyApp')
  .controller('NavCtrl', function($scope, $location) {

    $scope.getCurrPage = function() {
      for(var i=0, l=$scope.menu.length; i<l; i++){
        if($scope.menu[i].link === $location.path()) {
          return $scope.menu[i].title;
        }
      }
    }

    $scope.navTo = function(item) {
      $scope.currPage = item.title;
      $scope.isCollapsed = true;
      $location.path(item.link);
    }

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

    $scope.isCollapsed = true;
    $scope.currPage = $scope.getCurrPage();

  });
