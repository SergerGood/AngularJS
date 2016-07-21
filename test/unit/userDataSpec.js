'use strict';

describe('userData', function () {

    var mockUserResources;

    beforeEach(module("eventsApp"));

    beforeEach(function () {
        mockUserResources = sinon.stub({get:function () {}, save:function () {}});

        module(function ($provide) {
            $provide.value('userResource', mockUserResources);
        })
    });

    describe('getData', function () {

        it('should call getresource.get with the user name', inject(function (userData) {
            userData.getUser('bob');

            expect(mockUserResources.get.args[0][0]).toEqual({userName:'bob'});
        }));

        it('should return whatever userresource.get returns', inject(function (userData) {

            mockUserResources.get.returns('angular rocks');

            var result = userData.getUser('bob');

            expect(result).toBe('angular rocks');
        }))

    });

    describe('save', function () {

        it('should call userResource.save with the same parameters', inject(function (userData) {
            userData.save('some value');

            expect(mockUserResources.save.calledWith('some value')).toBe(true);
        }))
    });
});
