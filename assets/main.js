var cityArr = JSON.parse(localStorage.getItem('cityArr')) || [];


function renderButtons() {
    $('#citySearchedBtns').empty()

    for (var i=0; i < cityArr.length; i++) {
        $('#citySearchedBtns').prepend('<button>' + cityArr[i] + '</button><br/>')
    };
}
$('#clearCity').on('click', function() {
    cityArr = []
    localStorage.setItem('cityArr',JSON.stringify(cityArr))
})


renderButtons();

$('#citybtn1').on("click", function(event) {
    event.preventDefault();
   
    var city = $('#cityInput').val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=f7c58c030fde0e2d088010052e6de221"
    console.log(city)
    console.log(queryURL)
    
    //Ajax call for search button and prepend list
    cityArr.push(city)
    localStorage.setItem('cityArr',JSON.stringify(cityArr))
    renderButtons();

    //Ajax call to currentWeather
    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(response) {
        console.log(response)
            var currentWeather = $('#currentWeather')
            var cityH1 = $('<h1>').text(response.name + ", " + response.sys.country + " " + moment().format('l'))
            console.log(response.name)
            var tempLi = $('<li>').text("Temperature: " + response.main.temp + " F")
            console.log(response.main.temp)
            var feels_likeLi = $('<li>').text("Feels like: " + response.main.feels_like + " F")
            console.log(response.main.feels_like)
            var humidityLi = $('<li>').text("Humidity: " + response.main.humidity + "%")
            console.log(response.main.humidity)
            var windspeedLi = $('<li>').text("Wind Speed: " + response.wind.speed + " MPH")
            console.log(response.wind.speed)
            $('ul').children('ul').append(currentWeather)
            currentWeather.empty()
            currentWeather.append(cityH1)
            currentWeather.append(tempLi)
            currentWeather.append(feels_likeLi)
            currentWeather.append(humidityLi)
            currentWeather.append(windspeedLi)

            //Ajax to call 5 day images
            $.ajax({
                url : queryURL,
                method : "GET"
            }).then(function(response) {
                console.log(response)
    })
})


