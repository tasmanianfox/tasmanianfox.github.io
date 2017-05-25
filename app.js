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
    .when("/javascripts/unixtimestamp", {
        templateUrl : "views/javascripts_unixtimestamp.html",
		controller: 'JavascriptsUnixTimestampController'
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
  $scope.input = '';
  $scope.hashes = {
    md5: '',
    sha1: ''
  }

  $scope.recalculateHashes = function() {
    $scope.hashes.md5 = hex_md5($scope.input);
    $scope.hashes.sha1 = sha1($scope.input);
  }
});

app.controller('JavascriptsUnixTimestampController', function($scope) {
  $scope.timestamp = moment().format('X');
  $scope.datetime = null;
  $scope.format = 'YYYY-MM-DD HH:mm:ss'

  $scope.timestampToDateTime = function() {
    $scope.datetime = moment.unix($scope.timestamp).format($scope.format);
  }

  $scope.dateTimeToTimestamp = function() {
    $scope.timestamp = moment($scope.datetime, $scope.fprmat).format('X');
  }

  $scope.$on('$viewContentLoaded', function() {
    $scope.timestampToDateTime();
  });
});

app.controller('JavascriptsPasswordController', function($scope) {
	$scope.settings = {
		length: 10,
		amount: 10,
    containsLowerCaseLetters: true,
    containsUpperCaseLetters: true,
    containsNumbers: true,
    containsSpecialCharacters: true,
	}
  $scope.passwords = ["(Please press a \"Generate now!\" button)"];

  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specialCharacters = '!@#$%^&*(),.<>{}[]~';

  // Copy-pasted from: https://learn.javascript.ru/task/random-int-min-max
  function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
  }

	$scope.generate = function($event) {
		$event.preventDefault();
    var dictionary = '';
    if(true == $scope.settings.containsLowerCaseLetters) {
        dictionary += lowerCaseLetters;
    }
    if(true == $scope.settings.containsUpperCaseLetters) {
        dictionary += upperCaseLetters;
    }
    if(true == $scope.settings.containsNumbers) {
        dictionary += numbers;
    }
    if(true == $scope.settings.containsSpecialCharacters) {
        dictionary += specialCharacters;
    }
    var dictionaryLength = dictionary.length;
    $scope.passwords = [];
		for(var passwordIndex = 0; passwordIndex < $scope.settings.amount; passwordIndex++) {
      var password = '';
      while(password.length < $scope.settings.length) {
        var index = randomInteger(0, dictionaryLength);
        var character = dictionary.substring(index, index + 1);
        password += character;
      }
      $scope.passwords[$scope.passwords.length] = password;
    }
	}
});

$(document).on('click', '[data-noclick]', function(e) {
	e.preventDefault();
});
