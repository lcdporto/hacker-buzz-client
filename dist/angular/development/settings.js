(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('AppSettings', {
            appName: 'Events Clock',
            appVersion: 0.1,
            appBaseUrl: 'http://localhost:8000'
        });
})();
