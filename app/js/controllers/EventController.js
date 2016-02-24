'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '12:12 am',
            location:{
                address: 'Street',
                city: 'Moscow',
                province: 'moscow'
            },
            imageUrl:'/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creationName: 'Bob',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Tra ta ta',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fan and profit',
                    creationName: 'John',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Tra ta ta',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creationName: 'Jane',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Tra ta ta',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
