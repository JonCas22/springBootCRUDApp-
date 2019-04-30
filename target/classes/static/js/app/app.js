var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
   BASE: 'http://localhost:8080/SpringBootCRUDApp',
   USER_SERVICE_API : 'http://localhost:8080/SpringBootCRUDApp/api/user/',
   REGISTER_SERVICE_API : 'http://localhost:8080/SpringBootCRUDApp/register/',
   CATEGORY_SERVICE_API : 'http://localhost:8080/SpringBootCRUDApp/api/category/',
   LOGIN_SERVICE_API : 'http://localhost:8080/SpringBootCRUDApp/api/login/'
});

app.component('menuBar', {
      templateUrl: "partials/list",
      controller: function() {
        var $ctrl = this;
      }
});



app.run(function($rootScope, $location) {
    $rootScope.location = $location;
});

app.directive("matchPassword", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.matchPassword = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});



app.config(['$stateProvider', '$urlRouterProvider',
   function($stateProvider, $urlRouterProvider) {
    
       $stateProvider
       .state('user', {
           url: '/user',
           templateUrl: 'partials/user',
           controller:'UserController',
           controllerAs:'uctrl',
           resolve: {
//        	   users: function ($q, UserService) {
//        		   console.log('Load all users');
//        		   var deferred = $q.defer();
//        		   UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
//        		   return deferred.promise;
//        		   }
//           	}
       	}
           
       });
       
       $urlRouterProvider.otherwise('/');
       
	   $stateProvider
	   .state('category', {
	       url: '/category',
	       templateUrl: 'partials/category',
	       controller:'CategoryController',
	       controllerAs:'ctrl',
//	       resolve: {
//	           categories: function ($q, CategoryService) {
//	               console.log('Load all categories');
//	               var deferred = $q.defer();
//	               CategoryService.loadAllCategories().then(deferred.resolve, deferred.resolve);
//	               return deferred.promise;
//	           }
//	       }
	   });
	   
	   $urlRouterProvider.otherwise('/');
	   
	   $stateProvider
	   .state('login', {
	       url: '/',
	       templateUrl: 'partials/login',
	       controller:'CompanyController',
	       controllerAs:'lctrl'
	       //resolve: {}
	    	    
	   }
	   
	   );
	   
	   $urlRouterProvider.otherwise('/');
	   
	   $stateProvider
	   .state('register', {
	       url: '/register',
	       templateUrl: 'partials/register',
	       controller:'CompanyController',
	       controllerAs:'rctrl',
	       resolve: {}
	    	
	   }
	   
	   );
	   
	   $urlRouterProvider.otherwise('/');
	   
	   $stateProvider
	   .state('profile', {
	       url: '/profile',
	       templateUrl: 'partials/profile',
	       controller:'CompanyController',
	       controllerAs:'pctrl',
	       resolve: {
	    	   //console.log('You are in profile page');
	    	   
	       }
	    	
	   }
	   
	   );
	   
	   $urlRouterProvider.otherwise('/');
	   
   }
]);

app.component('modalMap', {
    templateUrl: "partials/modalMap",
    dataLat: '@',
    dataLng: '@',
    controller:function($q, CompanyService) {
      
       var lat = CompanyService.getCurrentLoginCompany().latitude;
       var lon = CompanyService.getCurrentLoginCompany().longitude;
       
       console.log(lat);
       console.log(lon);
       
       var myLatlng = new google.maps.LatLng(lat, lon);
      
         var myOptions = {
           zoom: 12,
           zoomControl: true,
           center: myLatlng,
           mapTypeId: google.maps.MapTypeId.SATELLITE
         };
         
          map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

       myMarker = new google.maps.Marker({
         position: myLatlng
       });
       myMarker.setMap(map);
       //alert(myLatlng);
     },
     
});






