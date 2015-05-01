'use strict';

describe('Directive: mySvg', function () {

  // load the directive's module
  beforeEach(module('ngsvgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-svg></my-svg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mySvg directive');
  }));
});
