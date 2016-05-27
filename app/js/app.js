'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])//'ngSanitize', 'ngCookies'
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',{
            templateUrl:'templates/NewEvent.html',
            controller: 'EditEventController'
        })
    })
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache',{capacity:3});
    });
