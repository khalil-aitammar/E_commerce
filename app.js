'use strict';
var app = angular.module('ecom', ['ngRoute'] );

//configuration de routeProvider 
app .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        // url page film
        when('/film', {
            templateUrl: 'src/Views/film.html',

        }).
        // url page series
        when('/series', {
            templateUrl: 'src/Views/series.html',

        }).
            // url par defaut
        otherwise({
            redirectTo: '/film'
        });
    }]);
