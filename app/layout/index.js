
'use strict';

/**
 * Module dependencies
 */
var angular = require('angular');

module.exports = angular

  .module('app.layout', [
    require('../common').name
  ])

  .directive('appContainer', require('./directives/appContainer'));
