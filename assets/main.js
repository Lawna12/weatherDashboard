var cityArr = JSON.parse(localStorage.getItem('cityArr')) || [];


function renderButtons() {
    $('#citySearchedBtns').empty()

    for (var i=0; i < cityArr.length; i++) {
        $('#citySearchedBtns').prepend('<button>' + cityArr[i] + '</button><br/>')
    };
}
renderButtons();

$('#citybtn1').on("click", function(event) {
    event.preventDefault();
   
    var city = $('#cityInput').val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&APPID=f7c58c030fde0e2d088010052e6de221"
    console.log(city)
    console.log(queryURL)
    
    //Ajax call for search button and prepend list
    cityArr.push(city)
    console.log(cityArr)
    localStorage.setItem('cityArr',JSON.stringify(cityArr))
    renderButtons();

    //Ajax call to weatherInfo
    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(response) {
            var weatherInfo = $('#weatherInfo')
            var cityH1 = $('<li>')
            var tempLi = $('<li>')
            var humidityLi = $('<li>')
            var windspeedLi = $('<li>')
            var uvIndexLi = $('<li>')
            $('.ul').children('ul').append(weatherInfo)
            weatherInfo.append(cityH1)
            weatherInfo.append(tempLi)
            weatherInfo.append(humidityLi)
            weatherInfo.append(windspeedLi)
            weatherInfo.append(uvIndexLi)
            cityLi.text(response.City)
            tempLi.text(response.Temperature)
            humidityLi.text(response.Humidity)
            windspeedLi.text(response.Windspeed)
            uvIndexLi.text(response.UVIndex)
    })
})


