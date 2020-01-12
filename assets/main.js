var cityArr = JSON.parse(localStorage.getItem('cityArr')) || [];


function renderButtons() {
    $('#citySearchedBtns').empty()

    for (var i=0; i < cityArr.length; i++) {
        var newCity = $('#citySearchedBtns').prepend('<button id="newCityBtn">' + cityArr[i] + '</button><br/>')
        
    };
}

$('#clearCity').on('click', function() {
    cityArr = []
    localStorage.setItem('cityArr',JSON.stringify(cityArr))
})

//event listener for new city buttons
$(document).on('click', "#newCityBtn", function() {
    var newQuery = $(this).text()
    console.log(newQuery)
})
renderButtons();


$('#citybtn1').on("click", function(event) {
    event.preventDefault();
    
   
    let city = $('#cityInput').val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=f7c58c030fde0e2d088010052e6de221"
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
        })
})


$('#citybtn1').on("click", function(event) {
    event.preventDefault();

    var city = $('#cityInput').val();
    var queryURL = ""
    console.log(city)


//Ajax call to append images
$.ajax({
  url : queryURL,
  method : "GET"      
}).then(function(response) {
    var img1 = "https://www.alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
    var img2 = "https://www.alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
    var img3 = "https://www.alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
    var img4 = "https://www.alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
    var img5 = "https://www.alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
    var image1 = $('#image1').add('src', img1)
    console.log(img1)
    console.log(image1)

})

})

    