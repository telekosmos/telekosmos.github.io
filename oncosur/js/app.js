
/*
var myApp = angular.module('myApp', []);
myApp.value('clientId', 'a12345654321x');

myApp.controller('DemoController', ['clientId', function DemoController(clientId) {
  this.clientId = clientId;
}]);

<html ng-app="myApp">
  <body ng-controller="DemoController as demo">
    Client ID: {{demo.clientId}}
  </body>
</html>
*/

// Separate modules for services, directives and filters
var mainService = angular.module('onco.mainService', []);
var mainDirective = angular.module('onco.mainDirective', []);
var mainFilter = anguler.filter('onco.mainFilter', []);

// .value is a recipe to create objects (in this case title object) which will be injected across the app
// when needed by injectors. In turn, this is also a service (mostly, a recipe for constructing the service)
mainService.value('onco.mainService.title', {
	string: 'GIST',
	size: 16
});

// Main module to control de application as <html ng-app='mainModule'
// or <body ng-app='mainModule'>
var mainModule = angular.module('onco', ['onco.mainService']);
mainModule.controller('HeadController', function ($scope, onco.mainService.title) {
	$scope.title = onco.mainService.title.string;

})