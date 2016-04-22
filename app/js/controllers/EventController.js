'use strict';

eventsApp.controller('EventController',
    function EventController($scope, evenData, $anchorScroll) {

        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';

        evenData.getEvent()
            .$promise
            .then(function (event) { $scope.event = event; console.log(event); })
            .catch( function (response) { console.log(response);});

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
        
        $scope.scrollToSession = function () {
            $anchorScroll();
        }
    }
);
