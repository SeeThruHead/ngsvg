'use strict';

/**
 * @ngdoc directive
 * @name ngsvgApp.directive:mySvg
 * @description
 * # mySvg
 */
angular.module('ngsvgApp')
  .directive('mySvg', function () {
    return {
      scope: {
        file: '='
      },
      restrict: 'E',
      templateUrl: 'views/my-svg.html'
    };
  });
