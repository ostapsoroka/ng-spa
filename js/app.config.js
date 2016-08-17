(function () {
    'use strict';
angular.module('app').config(routeConfig);
routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider, $urlRouterProvder){
    console.log('inside routeConfig');
    $stateProvider.state('contactList',{
        url: '/contacts',
        controller: 'contactList',
        templateUrl: '/views/contactList.html'
    }).state('contactLetter', {
        url: '/contacts/:letter',
        controller: 'contactLetter',
        templateUrl: '/views/contactLetter.html',
        resolve: {delay : function($timeout){ return $timeout( function() {}, 2000 ) }}
    }).state('contactLetter.editContact', {
        url: 'editContact/:name',
        controller: 'editContact',
        templateUrl: '/views/editContact.html'
    });
    $urlRouterProvder.when('','/contacts');
}
    
})();
