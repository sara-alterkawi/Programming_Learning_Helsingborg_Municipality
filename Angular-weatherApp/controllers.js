var app = angular.module('servicesApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('WeatherCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.weather = function (city) {
        //console.log($location);
        console.log(city);
        //the path mean the road
        $location.path('/weather-results/' + city);
    }
}]);

app.controller('WeatherResultsCtrl', ['$scope', '$routeParams', 'getWeather', function ($scope, $routeParams, getWeather) {
    //route is the discripe of road
    //console.log($routeParams);
    console.log($routeParams.stad);
    //accessable through $RoutParams
    //console.log($getWeather);
    var city = $routeParams.stad;
    getWeather.inputWeather(city)
        .then(function (cityResults) {
            console.log(cityResults);
            $scope.location = cityResults.location.name;
            $scope.description = cityResults.current.condition.text;
            $scope.image = cityResults.current.condition.icon;
            $scope.temp_c = cityResults.current.temp_c;

            //current:
            // condition: icon: "//cdn.apixu.com/weather/64x64/day/113.png"
            //condition: {text: "Sunny"
            //temp_c: 9
        })

}]);




