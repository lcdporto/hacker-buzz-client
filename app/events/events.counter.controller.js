(function () {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsCounterController', Controller);

    /* @ngInject */
    function Controller($interval, $rootScope, $localStorage, $state) {
        var vm = this;
        vm.title = 'Controller';
        vm.events = [];
        vm.interval = false;

        vm.goToEditor = goToEditor;

        activate();

        function activate() {
            vm.storage = $localStorage.$default({
                events: []
            });

            angular.forEach(vm.storage.events, function (event) {
                event.startDate = new Date(event.startDate);
                event.endDate = new Date(event.endDate);
            });

            vm.currentEvent = getNextEvent();
            vm.interval = $interval(updateEvents, 1000);
        }

        function updateEvents() {
            if (!vm.interval) {
                return;
            }

            var now = new Date();

            if (vm.currentEvent.endDate <= now) {
                vm.currentEvent = getNextEvent();
                if (!vm.currentEvent) {
                    $interval.stop(vm.interval);
                    vm.interval = false;
                    vm.currentEvent = {
                        name: 'Good Bye!',
                        remaining: {
                            hours: '00',
                            minutes: '00',
                            seconds: '00'
                        }
                    };
                }
            }

            var t = Date.parse(vm.currentEvent.endDate) - Date.parse(now);
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            //var days = Math.floor( t/(1000*60*60*24) );

            vm.currentEvent.remaining = {
                'hours': ((hours < 10) ? '0' + hours : hours),
                'minutes': ((minutes < 10) ? '0' + minutes : minutes),
                'seconds': ((seconds < 10) ? '0' + seconds : seconds)
            };
        }

        function getNextEvent() {
            var nextEvent = null;
            var now = new Date();
            for (var i = 0; i < vm.storage.events.length; i += 1) {
                if (vm.storage.events[i].startDate <= now && vm.storage.events[i].endDate >= now) {
                    nextEvent = vm.storage.events[i];
                    break;
                }
            }
            if (nextEvent) {
                $rootScope.backColor = getRandomColor();
            } else {
                $rootScope.backColor = '#000';
            }
            return nextEvent;
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i += 1) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function goToEditor() {
            $state.go('setevents');
        }
    }
})();
