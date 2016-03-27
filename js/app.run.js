(function () {
    'use strict';

    angular.module('app').run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function () {
            $rootScope.spinner.removeClass('ng-hide');
        });

        $rootScope.$on('$viewContentLoaded', function () {
            $rootScope.spinner.addClass('ng-hide');
        });
    });
}());
