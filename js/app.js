(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']);
    app.run( ['$rootScope', '$state', '$stateParams',
                      function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
         $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
         console.group('stateChangeSuccess');
         
         console.log('event: ');
         console.log(event)
         
         console.log('to state: ');
         console.log(toState)
         console.log('from state');
         console.log(fromState);
         console.groupEnd();
         });
         
         $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
         console.group('stateChangeStart');

         console.log('event: ');
         console.log(event)

         console.log('to state: ');
         console.log(toState)
         console.log('from state');
         console.log(fromState);
         console.groupEnd();
         
         $rootScope.spinner.removeClass('ng-hide');
         }); 
         
          $rootScope.$on("$viewContentLoading", function(event){
              console.group('viewContentLoading');
              console.log('viewContentLoading');
              console.log(event);
              console.groupEnd();
            
          });
          
          $rootScope.$on("$viewContentLoaded", function(event){
              console.group('viewContentLoaded');
              console.log('viewContentLoaded');
              console.log(event);
              console.groupEnd();
              $rootScope.spinner.addClass('ng-hide');
                  
              
          });
}]);
    
})();
