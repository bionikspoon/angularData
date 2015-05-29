'use strict';

describe('Controller: CheckinsListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDataApp'));

  var CheckinsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckinsListCtrl = $controller('CheckinsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
