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
            }
        ];
    }

})();
