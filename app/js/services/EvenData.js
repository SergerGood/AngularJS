eventsApp.factory('evenData', function ($http) {
    return{
        getEvent: function(successscb){
            return $http({method: 'GET', url:'/data/event/1'});
        }
    };
});
