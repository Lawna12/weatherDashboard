//defining var
$('#citybtn1').on("click", function(event) {
    event.preventDefault();

    var city = $('#cityInput').val();
    var queryURL = "" + city + "169ffa1d5f409fa8cf3f52589092c42a
    "

    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(response) {
        $('').text(JSON(response))
    })
})
