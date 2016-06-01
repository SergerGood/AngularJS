'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngSanitize', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',{
            templateUrl:'templates/NewEvent.html',
            controller: 'EditEventController'
        });

        $routeProvider.when('/events',{
            templateUrl:'templates/EventList.html',
            controller: 'EventListController'
        });

        $routeProvider.when('/event/:eventId',{
            templateUrl:'templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                event: function ($route, evenData){
                    return evenData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });

        $routeProvider.otherwise({redirectTo: '/events'})

        //$locationProvider.html5Mode(true);
    })
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache',{capacity:3});
    });
