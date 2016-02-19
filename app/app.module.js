(function () {
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ui.router',
            'ngResource',
            'satellizer',
            'app.core',
            'app.events',
            'angularjs-datetime-picker',
            'ngStorage',
            'angularMoment'
        ])
        .config(function ($urlRouterProvider,
                          $mdThemingProvider,
                          $resourceProvider) {

            $resourceProvider.defaults.stripTrailingSlashes = false;

            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('amber');

            $urlRouterProvider.otherwise('/set-events');
        });
})();
