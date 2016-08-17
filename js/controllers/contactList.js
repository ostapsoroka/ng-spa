(function () {
    'use strict';
angular.module('app').controller('contactList', contactList);
contactList.$inject =['$scope','$log',contacts];
function contactList ($scope, $log, contacts){
    console.log('inside controller');
    $scope.contactList = null;   
    $log.debug('inside controller');
    contacts.getContacts().then(function (response) {
        var tmp = [];
        console.log(response);
        response.data.contacts.forEach (function (item){
           var initial = item.name.slice (0,1);
           if (tmp.indexOf(initial) === -1){
               tmp.push(initial);
           } 
        });
        $scope.contactList = tmp;
    });
}

})();
