
$('#citybtn1').on("click", function(event) {
    event.preventDefault();

    var city = $('#cityInput').val();
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&APPID=f7c58c030fde0e2d088010052e6de221"

    //Ajax call to weatherInfo
    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(response) {
        function addRow(response) {
            var weatherInfo = $('#weatherInfo')
            var tdCity = $('<h1>')
            var tdTemp = $('<td>')
            var tdHumidity = $('<td>')
            var tdWindspeed = $('<td>')
            var tdUVIndex = $('<td>')
            $('.table').children('tbody').append(weatherInfo)
            weatherInfo.append(tdCity)
            weatherInfo.append(tdTemp)
            weatherInfo.append(tdHumidity)
            weatherInfo.append(tdWindspeed)
            weatherInfo.append(tdUVIndex)
            tdCity.text(response.City)
            tdTemp.text(response.Temperature)
            tdHumidity.text(response.Humidity)
            tdWindspeed.text(response.Windspeed)
            tdUVIndex.text(response.UVIndex)
        }
    })
})


