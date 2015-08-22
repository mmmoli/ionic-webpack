
'use strict';


const angular = require('angular');
require('./index.scss');

let ngModule = angular.module('app', [

]);

require('./constants')(ngModule);
require('./config')(ngModule);
require('./run')(ngModule);


//// Bootstrap App Module
//libsModule.ionicBootstrap(appModule, global);
