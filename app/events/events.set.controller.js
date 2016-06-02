(function () {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsSetController', Controller);

    /* @ngInject */
    function Controller($scope, $localStorage, $timeout, $mdDialog, AppSettings, $rootScope) {
        var vm = this;
        vm.title = 'Controller';

        vm.addEvent = addEvent;
        vm.share = share;
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

            $rootScope.backColor = '#eee';
        }

        function addEvent() {
            vm.storage.events.push(angular.copy(vm.newEvent));
            vm.newEvent = {};
        }

        function share() {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('body')))
                    .clickOutsideToClose(true)
                    .title('Share')
                    .textContent(AppSettings.appBaseUrl + '/load?events=' + btoa(angular.toJson(vm.storage.events)))
                    .ariaLabel('Share')
                    .ok('Close')
            );
        }
    }
})();
