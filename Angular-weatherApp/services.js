var app = angular.module('servicesApp');

app.factory('getWeather',['$http', function($http){
    var weather = {
        // All functionality here
        inputWeather: function(city) {
            var url = 'http://api.apixu.com/v1/forecast.json?key=dc46c2187c2842ac8ab125800181611&q='+ city;
            return $http.get(url)
            .then(function(data){
                return data.data;
            })
        }
    };
    return weather;
}]);
