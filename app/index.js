var scripts = global.document.getElementsByTagName('script');
var src = scripts[scripts.length - 1].getAttribute('src');
global.__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1);

const angular = require('angular');
require('angular-animate');
require('angular-sanitize');
require('angular-ui-router');
require('ionic/js/ionic');
require('ionic/js/ionic-angular');

require('./index.scss');


let ngModule = angular.module('app', [
    'ionic',
    'ui.router'
]);

require('./constants')(ngModule);
require('./config')(ngModule);
require('./run')(ngModule);
require('./common')(ngModule);
require('./states')(ngModule);


//// Bootstrap App Module
if (!window || !window.document) {
    throw new Error('window and document objects required.');
}

function onDeviceReady() {
    // bootstrap angular app
    angular.element(window.document).ready(function () {
        angular.bootstrap(window.document, ['app']);
    });

    // remove document deviceready listener
    window.document.removeEventListener('deviceready', onDeviceReady, false);
}

function onWindowLoad() {
    if (!(!window.cordova && !window.PhoneGap && !window.phonegap)) {
        // when on device add document deviceready listener
        window.document.addEventListener('deviceready', onDeviceReady, false);

    } else {
        // when on browser trigger onDeviceReady
        onDeviceReady();
    }

    // remove window load listener
    window.removeEventListener('load', onWindowLoad, false);
}

// add window load listener
window.addEventListener('load', onWindowLoad, false);

