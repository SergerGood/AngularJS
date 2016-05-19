'use strict';

eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter) {
        $scope.data = {};

        //var dur = $filter('durations');

        $scope.data.dur1 = durationsFilter(1);
        $scope.data.dur2 = durationsFilter(2);
        $scope.data.dur3 = durationsFilter(3);
        $scope.data.dur4 = durationsFilter(4);
});
