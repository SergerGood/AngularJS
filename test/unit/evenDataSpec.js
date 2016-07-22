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
});