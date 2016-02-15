'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '12:12 am',
            location:{
                address: 'Street',
                city: 'Moscow',
                province: 'moscow'
            },
            imageUrl:'/img/angularjs-logo.png'
        };

    }
);
