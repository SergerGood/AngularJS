'use strict';

eventsApp.controller('EditEventController',
    function EditEventController ($scope, evenData) {
        $scope.saveEvent = function(event, newEventForm){

            console.log(newEventForm);

            if(newEventForm.$valid) {
                evenData.save(event)
                    .$promise
                    .then(function (responce) { console.log('success', responce);})
                    .catch(function (responce) { console.log('failure', responce);});
            }
        };
        
        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    });