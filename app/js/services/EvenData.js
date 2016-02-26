eventsApp.factory('evenData', function ($http) {
    return{
        getEvent: function(successscb){
            $http({method: 'GET', url:'/data/event/1'})
                .success(function(data, status, headers, config){
                    successscb(data)
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers(), config)
                });
        }
    };
});
