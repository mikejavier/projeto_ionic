(function(){

  var app = angular.module('starter', ['ionic', 'ngSanitize'])

  app.controller('appCtrl', function($scope, $http){

   $scope.dados = [];
   $http.get('http://www.michaelsantillan.com/wp-json/wp/v2/posts')
   .success(function(dados){
        $scope.dados = dados;
        console.log($scope.dados[0].date);
   });



  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

}())