'use strict';

describe('evenData', function () {

    beforeEach(module("eventsApp"));

    it('should issue a GET request to /data/event/11 when getEvent is called and id is 11 ',

        inject(function (evenData, $httpBackend) {

            $httpBackend.expectGET('/data/event/11');
            $httpBackend.when('GET', '/data/event/11').respond({});
            evenData.getEvent(11);
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })
    );

    it('should return the correct data when getEvent is called',

        inject(function (evenData, $httpBackend) {

            $httpBackend.when('GET', '/data/event/11').respond({name:'My Event'});
            var event = evenData.getEvent(11);
            $httpBackend.flush();

            expect(event.name).toBe('My Event');
        })
    );

    it('should issue a GET request to /data/event when getAllEvents is called',

        inject(function (evenData, $httpBackend) {

            $httpBackend.when('GET', '/data/event').respond([{name: 'My Event'}]);
            var events = evenData.getAllEvents();
            $httpBackend.flush();

            expect(events[0].name).toBe('My Event');
        })
    );

    it('should set the id to 999 when save is calles',

        inject(function(evenData, $httpBackend){

            $httpBackend.when('POST', 'data/event/999').respond({});
            var event = {name:'My Event'};
            evenData.save(event);
            $httpBackend.flush();

            expect(event.id).toBe(999);
        })
    );

});