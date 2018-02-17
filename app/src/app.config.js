angular.module('application')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/components/home/home.component.html",
                controller: 'HomeCtrl'
            });

        $urlRouterProvider.otherwise("/home");
    })
    
    .directive('errSrc', function() {
        return {
          link: function(scope, element, attrs) {
            element.bind('error', function() {
              if (attrs.src != attrs.errSrc) {
                attrs.$set('src', attrs.errSrc);
              }
            });
          }
        }
    });