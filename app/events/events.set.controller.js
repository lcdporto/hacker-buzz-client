(function () {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsSetController', Controller);

    /* @ngInject */
    function Controller($scope, $localStorage, $timeout) {
        var vm = this;
        vm.title = 'Controller';

        vm.addEvent = addEvent;
        vm.openMenu = vm.openMenuTooltip = false;

        activate();

        function activate() {
            vm.storage = $localStorage.$default({
                events: []
            });

            $scope.$watch('vm.openMenu', function (openMenu) {
                $timeout(function () {
                    vm.openMenuTooltip = vm.openMenu;
                }, (openMenu) ? 400 : 0);
            });
        }

        function addEvent() {
            vm.storage.events.push(angular.copy(vm.newEvent));
            vm.newEvent = {};
        }
    }
})();
