'use strict';

describe('Controller: CheckinsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDataApp'));

  var CheckinsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckinsCtrl = $controller('CheckinsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
