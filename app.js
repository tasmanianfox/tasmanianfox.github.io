var app = angular.module("App", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/index.html",
		controller: 'MainController'
    })
    .when("/javascripts/hash", {
        templateUrl : "views/javascripts_hash.html",
		controller: 'JavascriptsHashController'
    })
    .when("/javascripts/rsa", {
        templateUrl : "views/javascripts_rsa.html",
		controller: 'JavascriptsRsaController'
    })
    .when("/javascripts/password", {
        templateUrl : "views/javascripts_password.html",
		controller: 'JavascriptsPasswordController'
    })
	.otherwise("/")
});

app.controller('MainController', function($scope) {
	
});

app.controller('JavascriptsHashController', function($scope) {
	
});

app.controller('JavascriptsRsaController', function($scope) {
	
});

app.controller('JavascriptsPasswordController', function($scope) {
	
});

$(document).on('click', '[data-noclick]', function(e) {
	e.preventDefault();
});