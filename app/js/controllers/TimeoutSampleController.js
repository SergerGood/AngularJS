'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        var promise = $timeout(function () {
            $scope.name = "Jhone";
        },3000);

        //setTimeout(function () {
        //    $scope.name = "Jhone";
        //},3000);


        $scope.cancel = function () {
            $timeout.cancel(promise);
        }

});
