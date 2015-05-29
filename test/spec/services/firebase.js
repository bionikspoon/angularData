'use strict';

describe('Service: FIREBASE', function () {

  // load the service's module
  beforeEach(module('angularDataApp'));

  // instantiate service
  var FIREBASE;
  beforeEach(inject(function (_FIREBASE_) {
    FIREBASE = _FIREBASE_;
  }));

  it('should do something', function () {
    expect(!!FIREBASE).toBe(true);
  });

});
