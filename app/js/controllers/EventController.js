'use strict';

eventsApp.controller('EventController',
    function EventController($scope, evenData, $anchorScroll, $routeParams, $route) {


        console.log($route.current.params.foo);
        console.log($route.current.pathParams.eventId);
        console.log($routeParams.eventId);

        $scope.snippet = '<span style="color:red;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';

        $scope.reload = function(){
            $route.reload();
        };

        evenData.getEvent($routeParams.eventId)
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
