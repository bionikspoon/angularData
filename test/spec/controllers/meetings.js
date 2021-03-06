'use strict';

describe('Controller: MeetingsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDataApp'));

  var MeetingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetingsCtrl = $controller('MeetingsCtrl', {
      $scope: scope,
      currentAuth: {
        uid: '1'
      }
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
