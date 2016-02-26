'use strict';

eventsApp.controller('EventController',
    function EventController($scope, evenData) {

        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';

        evenData.getEvent(function (event) {
            $scope.event = event;
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
