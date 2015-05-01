'use strict';

/**
 * @ngdoc function
 * @name ngsvgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngsvgApp
 */
angular.module('ngsvgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
