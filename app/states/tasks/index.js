export default ngModule => {
    "use strict";

    ngModule
        .config(function($stateProvider) {
            $stateProvider
                .state('tasks', {
                    url: '/',
                    template: `<h1>Tasks here</h1>`
                });
        });

};
