////////////////Weather JS////////////////
$(document).ready(function () {
    //Add click event
    $("#submitWeather").click(function () {
      var city = $("#city").val();
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=9767ab70e7f8544c3f3d06ebc7fc8fec",
        type: "GET",
        datatype: "jsonp",
        success: function (data) {
          console.log(data);
          var widget = weatherShow(data);
          $("#weatherShow").html(widget);
          $("#city").val("");
        }
      });
    });
  });
  function weatherShow(data) {
    return "<div><strong>Current weather for</strong> " + data.name + "," + data.sys.country + "</div>" +
      "<div><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + data.weather[0].description + "</div>" +
      "<div><strong>Temperature</strong>:" + " " + data.main.temp + "&deg;C</div>";
  };


