(function () {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsLoadController', Controller);

    /* @ngInject */
    function Controller($stateParams, $localStorage, $state) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        function activate() {
            var events = angular.fromJson(atob($stateParams.events));

            $localStorage.$reset();
            $localStorage.$default({
                events: events
            });

            $state.go('count');
        }
    }
})();
