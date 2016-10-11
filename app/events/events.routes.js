(function() {
    'use strict';

    angular
        .module('app.events')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'setevents',
                config: {
                    url: '/set-events',
                    templateUrl: 'app/events/events.set.html',
                    controller: 'EventsSetController',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'count',
                config: {
                    url: '/counter',
                    templateUrl: 'app/events/events.counter.html',
                    controller: 'EventsCounterController',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'load',
                config: {
                    url: '/load?events=',
                    controller: 'EventsLoadController'
                }
            },
            {
                state: 'test',
                config: {
                    url: '/test',
                    templateUrl: 'app/events/test.html',
                    // controller: 'EventsSetController',
                    // controllerAs: 'vm'
                }
            },
            {
                state: 'landing',
                config: {
                    url: '/landing',
                    templateUrl: 'app/events/landing.html',
                    // controller: 'EventsSetController',
                    // controllerAs: 'vm'
                }
            },
            {
                state: 'play',
                config: {
                    url: '/play',
                    templateUrl: 'app/events/play.html',
                    // controller: 'EventsSetController',
                    // controllerAs: 'vm'
                }
            },
        ];
    }

})();
