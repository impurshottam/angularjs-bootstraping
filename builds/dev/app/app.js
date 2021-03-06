;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = [];

    function config() {}
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.rand = Math.random();
    }

    /*Bootstraping angularjs apps*/
    angular.bootstrap(document.getElementById('app1'), ['app']);
    angular.bootstrap(document.getElementById('app2'), ['app']);

}(window, angular, undefined));
