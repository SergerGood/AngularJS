'use strict';

describe('event registrtion app', function () {

    describe('events page', function () {

        beforeEach(function () {
            browser.get('http://localhost:9000/index.html#/events');
        });

        it('should have the correct title and first event', function () {

            var list = element.all(by.repeater('event in events'));
            expect(list.count()).toEqual(4);

            var titleElement = element(by.binding('event.name'));
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        })
    });

    describe('event detail page', function () {

        beforeEach(function () {
            browser.get('http://localhost:9000/index.html#/event/1');
        });

        it('should sort by mame', function () {

            var list = element.all(by.repeater('session in event.sessions'));
            var titleElement = list.first().element(by.binding('name'));
            expect(titleElement.getText()).toEqual('Directives Masterclass');
        });

        it('should have 3 session', function () {

            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(3);
        });

        it('should have 1 seesion is shoosen', function () {

            var selectElement = element(by.model('query.level'));
            selectElement.element(by.cssContainingText('option', 'Introductory')).click();

            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(1);
        });

        it('should sort correctly when sortOrder is changed', function () {

            var selectElement = element(by.model('sortorder'));
            selectElement.element(by.cssContainingText('option', 'Votes')).click();

            var firstSession = element.all(by.repeater('session in event.sessions')).first();
            var firstSessionName = firstSession.element(by.binding('name')).getText();
            expect(firstSessionName).toEqual('Directives Masterclass');
        });

        it('should increment the vote count when session is upvoted', function () {

           element.all(by.deepCss('div.votingButton')).first().click();
            var firstVoteCount = element.all(by.binding('session.upVoteCount')).first();
            expect(firstVoteCount.getText()).toEqual('1');
        })
    });
});
