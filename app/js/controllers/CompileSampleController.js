'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {


        var fn = $parse('1 + 2');
        console.log(fn());

        var getter = $parse('event.name');

        var context1 = {event:{name:'context1'}};
        var context2 = {event:{name:'context2'}};

        console.log(getter(context1));
        console.log(getter(context2));

        console.log(getter(context1, context2));

        var setter = getter.assign;
        setter(context2, 'context3');

        console.log(context2.event.name);

        $scope.appendDivToElement=function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("appendHere"));
        }

});
