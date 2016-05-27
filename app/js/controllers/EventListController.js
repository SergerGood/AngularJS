'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, evenData) {
        $scope.events = evenData.getAllEvents();
    }
);