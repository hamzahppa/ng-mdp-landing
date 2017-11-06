'use strict';

angular.module('mdp-web.version', [
  'mdp-web.version.interpolate-filter',
  'mdp-web.version.version-directive'
])

.value('version', '0.1');
