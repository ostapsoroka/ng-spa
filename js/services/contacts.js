(function () {
    'use strict';

    angular.module('app').factory('contacts', contacts);

    contacts.$inject = ['$http', '$log'];

    function contacts($http, $log) {
        return {
        
            getContacts: function () {
                   $log.debug('getting contacts');
                return $http.get('/contactsStub.json');
            }
        };
    }
}());
