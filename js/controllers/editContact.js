(function () {
    'use strict';
angular.module('app').controller('editContact', editContact);
editContact.$inject = ['$scope', '$stateParams'];
function editContact($scope, $stateParams){
    $scope['edit'+$stateParams.name] = true;
$scope.$parent.letterContacts.forEach(function(contact){
    $scope.$parent['hide'+ contact.name] = false;
})    
    $scope.$parent['hide'+$stateParams.name] = true;
}

}());
