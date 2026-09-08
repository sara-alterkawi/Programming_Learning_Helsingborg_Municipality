var app = angular.module('servicesApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/weather', {
            templateUrl: 'templates/weather.html',
            controller: 'WeatherCtrl'
        })
        .when('/weather-results/:stad', { //: is a parameter and it can be whatever we call it the key
            templateUrl: 'templates/weather-results.html',
            controller: 'WeatherResultsCtrl'
        });

});