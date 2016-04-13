'use strict';

eventsApp.controller('EventController',
    function EventController($scope, evenData, $log) {

        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';

        evenData.getEvent
        .success(function (event) { $scope.event = event; })
        .error(function(data, status, headers, config){
            $log.warn(data, status, headers(), config)
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
