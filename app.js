'use strict';
var app = angular.module('ecom', ['ngRoute'] );
app .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/film', {
            templateUrl: 'src/Views/film.html',

        }).
        when('/seris', {
            templateUrl: 'src/Views/seris.html',

        }).
        otherwise({
            redirectTo: '/film'
        });
    }]);