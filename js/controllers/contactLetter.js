(function () {
    'use strict';

angular.module('app').controller('contactLetter', contactLetter);
contactLetter.$inject = ['$scope','$stateParams', 'contacts' ];

function contactLetter($scope, $stateParams, contacts){
contacts.getContacts().then(function(result){
    $scope.letterContacts = [];
    result.data.contacts.forEach(function(item){
        var initial = item.name.slice(0,1);
        if ($stateParams.letter === initial.toLowerCase()){
            $scope.letterContacts.push(item);
            if (! $scope.initial) {
                $scope.initial = initial;
            }
        }
    })
});
}
})();
