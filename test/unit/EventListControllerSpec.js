'use strict';

describe('EventListController', function () {

    var $controllerConstructor, scope, mockEvenData;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEvenData = sinon.stub( {getAllEvents: function(){} });
    }));


    it('should set the scope events to result of evenData.getAllEvents', function () {

        var mockEvents = {};
        mockEvenData.getAllEvents.returns(mockEvents);

        $controllerConstructor("EventListController",
            {'$scope' : scope, evenData: mockEvenData});

        expect(scope.events).toBe(mockEvents);
    })
});
