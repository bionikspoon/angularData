'use strict';

describe('Controller: CheckinslistCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDataApp'));

  var CheckinslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckinslistCtrl = $controller('CheckinslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
