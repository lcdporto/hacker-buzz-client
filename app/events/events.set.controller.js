(function () {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsSetController', Controller);

    /* @ngInject */
    function Controller($rootScope, $localStorage) {
        var vm = this;
        vm.title = 'Controller';

        vm.addEvent = addEvent;

        activate();

        function activate() {
            vm.storage = $localStorage.$default({
                events: []
            });
        }

        function addEvent() {
            vm.storage.events.push(angular.copy(vm.newEvent));
            vm.newEvent = {};
        }
    }
})();
