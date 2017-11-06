'use strict';

describe('mdp-web.version module', function() {
  beforeEach(module('mdp-web.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
