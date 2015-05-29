'use strict';

describe('Directive: confirmationNeeded', function () {

  // load the directive's module
  beforeEach(module('angularDataApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<confirmation-needed></confirmation-needed>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the confirmationNeeded directive');
  }));
});
